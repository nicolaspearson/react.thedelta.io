import AuthService from '@api/AuthService';
import ReceiptService from '@api/ReceiptService';
import RegistrationService from '@api/RegistrationService';

import { AuthStore } from '@store/AuthStore';
import { ContactUsStore } from '@store/ContactUsStore';
import { EarlyAccessStore } from '@store/EarlyAccessStore';
import { FlagStore } from '@store/FlagStore';
import { ReceiptStore } from '@store/ReceiptStore';
import { RouterStore } from '@store/RouterStore';

import { AuthManagerClient } from '@proto/AuthServiceClientPb';
import { ReceiptManagerClient } from '@proto/ReceiptServiceClientPb';
import { RegistrationManagerClient } from '@proto/RegistrationServiceClientPb';

import ApiUtils from '@utils/ApiUtils';

// tslint:disable no-null-keyword
export class RootStore {
	public authStore: AuthStore;
	public contactUsStore: ContactUsStore;
	public earlyAccessStore: EarlyAccessStore;
	public flagStore: FlagStore;
	public receiptStore: ReceiptStore;
	public routerStore: RouterStore;

	private authManagerClient: AuthManagerClient;
	public authService: AuthService;

	private receiptManagerClient: ReceiptManagerClient;
	public receiptService: ReceiptService;

	private registrationManagerClient: RegistrationManagerClient;
	public registrationService: RegistrationService;

	constructor() {
		this.authStore = new AuthStore(this);
		this.contactUsStore = new ContactUsStore(this);
		this.earlyAccessStore = new EarlyAccessStore(this);
		this.flagStore = new FlagStore(this);
		this.receiptStore = new ReceiptStore(this);
		this.routerStore = new RouterStore(this);

		this.authManagerClient = new AuthManagerClient(ApiUtils.getApiEndpoint(), null, null);
		this.authService = new AuthService(this.authManagerClient);

		this.receiptManagerClient = new ReceiptManagerClient(ApiUtils.getApiEndpoint(), null, null);
		this.receiptService = new ReceiptService(this.receiptManagerClient);

		this.registrationManagerClient = new RegistrationManagerClient(
			ApiUtils.getApiEndpoint(),
			null,
			null
		);
		this.registrationService = new RegistrationService(this.registrationManagerClient);
	}
}
