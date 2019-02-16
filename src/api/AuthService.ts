import * as grpcWeb from 'grpc-web';

import { AuthLogin } from '@models/AuthLogin';
import { AuthSignUp } from '@models/AuthSignUp';
import { AuthToken } from '@models/AuthToken';
import {
	EchoReply,
	EchoRequest,
	LoginReply,
	LoginRequest,
	SaveUserReply,
	SaveUserRequest
} from '@proto/auth_pb';
import { AuthManagerClient } from '@proto/AuthServiceClientPb';
import ApiUtils from '@utils/ApiUtils';
import * as ProtoUtils from '@utils/ProtoUtils';

export default class AuthService {
	private authManagerClient: AuthManagerClient;

	constructor(authManagerClient: AuthManagerClient) {
		this.authManagerClient = authManagerClient;
	}

	public async echo(message: string): Promise<string> {
		const request = new EchoRequest();
		request.setMessage(message);
		return new Promise<string>((resolve, reject) => {
			this.authManagerClient.echo(request, {}, (error: grpcWeb.Error, reply: EchoReply) => {
				if (error) {
					reject(error);
				} else {
					resolve(reply.getMessage());
				}
			});
		});
	}

	public async login(authLogin: AuthLogin): Promise<AuthToken> {
		const request = new LoginRequest();
		request.setUsername(authLogin.username);
		request.setPassword(authLogin.password);
		return new Promise<AuthToken>((resolve, reject) => {
			this.authManagerClient.login(
				request,
				{ 'x-access-token': ApiUtils.getApiAccessToken() },
				(error: grpcWeb.Error, reply: LoginReply) => {
					if (error) {
						reject(error);
					} else {
						const authToken: AuthToken = {
							token: reply.getToken(),
							user: ProtoUtils.userTransformFromProto(reply.getUser())
						};
						resolve(authToken);
					}
				}
			);
		});
	}

	public async signUp(authSignUp: AuthSignUp): Promise<AuthToken> {
		const request = new SaveUserRequest();
		request.setUser(ProtoUtils.userTransformToProto(authSignUp.user));
		return new Promise<AuthToken>((resolve, reject) => {
			this.authManagerClient.saveUser(
				request,
				{ 'x-access-token': ApiUtils.getApiAccessToken() },
				(error: grpcWeb.Error, reply: SaveUserReply) => {
					if (error) {
						reject(error);
					} else {
						const authToken: AuthToken = {
							token: reply.getToken(),
							user: ProtoUtils.userTransformFromProto(reply.getUser())
						};
						resolve(authToken);
					}
				}
			);
		});
	}
}
