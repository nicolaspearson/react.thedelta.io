import * as grpcWeb from 'grpc-web';

import { ContactUs } from '@models/ContactUs';
import {
	EchoReply,
	EchoRequest,
	SaveContactUsItemReply,
	SaveContactUsItemRequest
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

	public async saveContactUsItem(contactUs: ContactUs): Promise<ContactUs> {
		const request = new SaveContactUsItemRequest();
		request.setContactUs(ProtoUtils.contactUsTransformToProto(contactUs));
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
}
