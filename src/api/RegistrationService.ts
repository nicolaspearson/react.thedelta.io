import * as grpcWeb from 'grpc-web';

import { ContactUs } from '@models/ContactUs';
import { EarlyAccess } from '@models/EarlyAccess';
import {
	EchoReply,
	EchoRequest,
	SaveContactUsItemReply,
	SaveContactUsItemRequest,
	SaveEarlyAccessItemReply,
	SaveEarlyAccessItemRequest
} from '@proto/registration_pb';
import { RegistrationManagerClient } from '@proto/RegistrationServiceClientPb';
import ApiUtils from '@utils/ApiUtils';
import * as ProtoUtils from '@utils/ProtoUtils';

export default class RegistrationService {
	private registrationManagerClient: RegistrationManagerClient;

	constructor(registrationManagerClient: RegistrationManagerClient) {
		this.registrationManagerClient = registrationManagerClient;
	}

	public async echo(message: string): Promise<string> {
		const request = new EchoRequest();
		request.setMessage(message);
		return new Promise<string>((resolve, reject) => {
			this.registrationManagerClient.echo(request, {}, (error: grpcWeb.Error, reply: EchoReply) => {
				if (error) {
					reject(error);
				} else {
					resolve(reply.getMessage());
				}
			});
		});
	}

	public async saveContactUsItem(contactUs: ContactUs, captcha: string): Promise<ContactUs> {
		const request = new SaveContactUsItemRequest();
		request.setContactUs(ProtoUtils.contactUsTransformToProto(contactUs));
		request.setCaptcha(captcha);
		return new Promise<ContactUs>((resolve, reject) => {
			this.registrationManagerClient.saveContactUsItem(
				request,
				{ 'x-access-token': ApiUtils.getApiAccessToken() },
				(error: grpcWeb.Error, reply: SaveContactUsItemReply) => {
					if (error) {
						reject(error);
					} else {
						resolve(ProtoUtils.contactUsTransformFromProto(reply.getContactUs()));
					}
				}
			);
		});
	}

	public async saveEarlyAccessItem(emailAddress: string, captcha: string): Promise<EarlyAccess> {
		const request = new SaveEarlyAccessItemRequest();
		request.setEmailAddress(emailAddress);
		request.setCaptcha(captcha);
		return new Promise<EarlyAccess>((resolve, reject) => {
			this.registrationManagerClient.saveEarlyAccessItem(
				request,
				{ 'x-access-token': ApiUtils.getApiAccessToken() },
				(error: grpcWeb.Error, reply: SaveEarlyAccessItemReply) => {
					if (error) {
						reject(error);
					} else {
						resolve(ProtoUtils.earlyAccessTransformFromProto(reply.getEarlyAccess()));
					}
				}
			);
		});
	}
}
