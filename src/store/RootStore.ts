import RegistrationService from '@api/RegistrationService';

import { ContactUsStore } from '@store/ContactUsStore';
import { FlagStore } from '@store/FlagStore';
import { RouterStore } from '@store/RouterStore';

import { RegistrationManagerClient } from '@proto/RegistrationServiceClientPb';

import ApiUtils from '@utils/ApiUtils';

// tslint:disable no-null-keyword
export class RootStore {
	public contactUsStore: ContactUsStore;
	public flagStore: FlagStore;
	public routerStore: RouterStore;

	private registrationManagerClient: RegistrationManagerClient;
	public registrationService: RegistrationService;

	constructor() {
		this.contactUsStore = new ContactUsStore(this);
		this.flagStore = new FlagStore(this);
		this.routerStore = new RouterStore(this);

		this.registrationManagerClient = new RegistrationManagerClient(
			ApiUtils.getApiEndpoint(),
			null,
			null
		);
		this.registrationService = new RegistrationService(this.registrationManagerClient);
	}
}
