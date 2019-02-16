import { flow } from 'mobx';

import { Receipt } from '@models/Receipt';

import { BaseStore } from '@store/BaseStore';
import { RootStore } from '@store/RootStore';

export class ReceiptStore extends BaseStore<Receipt> {
	public rootStore: RootStore;

	constructor(rootStore: RootStore) {
		super(rootStore);
		this.rootStore = rootStore;
	}

	public echoRequest = flow(function*(this: ReceiptStore, message: string) {
		this.initState();
		this.loading = true;
		try {
			const res: string = yield this.rootStore.receiptService.echo(message);
			this.handleResponse(res);
		} catch (error) {
			this.handleError(error);
		}
	});

	public saveReceipt = flow(function*(this: ReceiptStore, receipt: Receipt) {
		this.initState();
		this.loading = true;
		try {
			const res: Receipt = yield this.rootStore.receiptService.saveReceipt(receipt);
			this.handleResponse(res);
		} catch (error) {
			this.handleError(error);
		}
	});
}
