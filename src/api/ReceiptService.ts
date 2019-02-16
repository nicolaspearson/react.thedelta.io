import * as grpcWeb from 'grpc-web';

import { Receipt } from '@models/Receipt';
import {
	EchoReply,
	EchoRequest,
	Receipt as ReceiptProto,
	SaveReceiptReply,
	SaveReceiptRequest
} from '@proto/receipt_pb';
import { ReceiptManagerClient } from '@proto/ReceiptServiceClientPb';
import ApiUtils from '@utils/ApiUtils';
import * as ProtoUtils from '@utils/ProtoUtils';

export default class ReceiptService {
	private receiptManagerClient: ReceiptManagerClient;

	constructor(receiptManagerClient: ReceiptManagerClient) {
		this.receiptManagerClient = receiptManagerClient;
	}

	public async echo(message: string): Promise<string> {
		const request = new EchoRequest();
		request.setMessage(message);
		return new Promise<string>((resolve, reject) => {
			this.receiptManagerClient.echo(request, {}, (error: grpcWeb.Error, reply: EchoReply) => {
				if (error) {
					reject(error);
				} else {
					resolve(reply.getMessage());
				}
			});
		});
	}

	public async saveReceipt(receipt: Receipt): Promise<Receipt> {
		const request = new SaveReceiptRequest();
		request.setReceipt(ProtoUtils.receiptTransformToProto(receipt));
		return new Promise<Receipt>((resolve, reject) => {
			this.receiptManagerClient.saveReceipt(
				request,
				{ 'x-access-token': ApiUtils.getApiAccessToken() },
				(error: grpcWeb.Error, reply: SaveReceiptReply) => {
					if (error) {
						reject(error);
					} else {
						const receiptProto: ReceiptProto | undefined = reply.getReceipt();
						if (receiptProto !== undefined) {
							resolve(ProtoUtils.receiptTransformFromProto(receiptProto));
						} else {
							reject(new Error('No response received!'));
						}
					}
				}
			);
		});
	}
}
