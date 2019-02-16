import { flow, observable } from 'mobx';

import { ContactUs } from '@models/ContactUs';

import { BaseStore } from '@store/BaseStore';
import { RootStore } from '@store/RootStore';

export class ContactUsStore extends BaseStore<ContactUs> {
	public rootStore: RootStore;

	@observable
	public resetCaptcha: boolean = false;

	constructor(rootStore: RootStore) {
		super(rootStore);
		this.rootStore = rootStore;
	}

	public echoRequest = flow(function*(this: ContactUsStore, message: string) {
		this.initState();
		this.loading = true;
		try {
			const res = yield this.rootStore.registrationService.echo(message);
			this.handleResponse(res);
		} catch (error) {
			this.handleError(error);
		}
	});

	public contactUsRequest = flow(function*(
		this: ContactUsStore,
		contactUs: ContactUs,
		captcha: string
	) {
		this.initState();
		this.resetCaptcha = false;
		this.loading = true;
		try {
			const res = yield this.rootStore.registrationService.saveContactUsItem(contactUs, captcha);
			this.handleResponse(res);
			if (this.data && this.data.id) {
				this.resetCaptcha = true;
			}
		} catch (error) {
			this.handleError(error);
		}
	});
}
