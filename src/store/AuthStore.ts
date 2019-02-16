import { flow } from 'mobx';

import { AuthLogin } from '@models/AuthLogin';
import { AuthSignUp } from '@models/AuthSignUp';
import { AuthToken } from '@models/AuthToken';

import { BaseStore } from '@store/BaseStore';
import { RootStore } from '@store/RootStore';

export class AuthStore extends BaseStore<AuthToken> {
	public rootStore: RootStore;

	constructor(rootStore: RootStore) {
		super(rootStore);
		this.rootStore = rootStore;
	}

	public echoRequest = flow(function*(this: AuthStore, message: string) {
		this.initState();
		this.loading = true;
		try {
			const res: string = yield this.rootStore.authService.echo(message);
			this.handleResponse(res);
		} catch (error) {
			this.handleError(error);
		}
	});

	public loginRequest = flow(function*(this: AuthStore, authLogin: AuthLogin) {
		this.initState();
		this.loading = true;
		try {
			const res: AuthToken = yield this.rootStore.authService.login(authLogin);
			this.handleResponse(res);
		} catch (error) {
			this.handleError(error);
		}
	});

	public authSignUpRequest = flow(function*(this: AuthStore, authSignUp: AuthSignUp) {
		this.initState();
		this.loading = true;
		try {
			const res: AuthToken = yield this.rootStore.authService.signUp(authSignUp);
			this.handleResponse(res);
		} catch (error) {
			this.handleError(error);
		}
	});
}
