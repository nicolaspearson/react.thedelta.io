import { flow } from 'mobx';

import { EarlyAccess } from '@models/EarlyAccess';

import { BaseStore } from '@store/BaseStore';
import { RootStore } from '@store/RootStore';

export class EarlyAccessStore extends BaseStore<EarlyAccess> {
	public rootStore: RootStore;

	constructor(rootStore: RootStore) {
		super(rootStore);
		this.rootStore = rootStore;
	}

	public earlyAccessRequest = flow(function*(
		this: EarlyAccessStore,
		emailAddress: string,
		captcha: string
	) {
		this.initState();
		this.loading = true;
		try {
			const res: EarlyAccess = yield this.rootStore.registrationService.saveEarlyAccessItem(
				emailAddress,
				captcha
			);
			this.handleResponse(res);
		} catch (error) {
			this.handleError(error);
		}
	});
}
