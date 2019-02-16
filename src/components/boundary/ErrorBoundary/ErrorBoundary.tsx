import { Button, Card } from 'antd';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

import Logo from '@components/icon/Logo';
import { RouteNames } from '@enums/RouteNames';
import { RouterStore } from '@store/RouterStore';

import './style.less';

export interface ErrorBoundaryProps {
	children?: any;
	routerStore?: RouterStore;
}

interface State {
	hasError: boolean;
}

@inject('routerStore')
@observer
class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
	public state: State = {
		hasError: false
	};

	constructor(props: ErrorBoundaryProps, context: any) {
		super(props, context);
	}

	public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		this.setState({
			hasError: true
		});
	}

	private onHomeClick = (event: React.MouseEvent) => {
		if (event) {
			event.preventDefault();
		}
		if (this.props.routerStore) {
			const { router } = this.props.routerStore;
			router.navigate(RouteNames.HOME);
		}
	};

	public render() {
		if (this.state.hasError) {
			return (
				<section className="Error__Main">
					<Card className="Error__Card" bordered={false} cover={<Logo />}>
						<h1 className="Error__Message">
							Oh no!
							<br />
							We are terribly sorry, something went wrong!
						</h1>
						<h2 className="Error__Detail">
							We have logged the issue and have already started working on a solution!
						</h2>
						<br />
						<Button size="large" type="primary" onClick={this.onHomeClick}>
							Take me home
						</Button>
					</Card>
				</section>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
