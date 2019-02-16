import Logger from '@logger';

export default class ApiUtils {
	public static async execute(
		headers: Headers,
		method: string,
		url: string,
		path: string,
		data?: any,
		resOnly?: boolean
	): Promise<Response> {
		let resStatus: number = 0;
		return fetch(url + path, {
			cache: 'default',
			method,
			headers,
			body: JSON.stringify(data)
		})
			.then((res) => {
				// Set the status code from the response
				resStatus = res.status;

				if (resOnly) {
					return res;
				}

				if (resStatus === 204 || resStatus === 500) {
					return '{}';
				}

				return res.json();
			})
			.then((res) => {
				switch (resStatus) {
					case 500:
						Logger.log('internal-server-error');
						throw Error('500 Internal Server Error: Please try again!');
				}
				return res;
			})
			.catch((error) => {
				if (error instanceof Error) {
					Logger.log(error.message);
					return Promise.reject(error.message);
				}
				return Promise.reject(error);
			});
	}

	public static getApiEndpoint() {
		return process.env.REACT_APP_API_ENDPOINT || '';
	}

	public static getApiAccessToken() {
		return process.env.REACT_APP_API_ACCESS_TOKEN || '';
	}
}
