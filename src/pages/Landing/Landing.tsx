import { observer } from 'mobx-react';
import * as React from 'react';

import Head from '@components/structural/Head';
import Header from '@components/structural/Header';
import Page from '@components/structural/Page';
import LandingHead from '@components/ui/LandingHead';

import './style.less';

export interface LandingProps {
	// Empty
}

interface State {
	// Empty
}

@observer
class Landing extends React.Component<LandingProps, State> {
	public state: State = {
		// Empty
	};

	public render() {
		return (
			<Page>
				<Head>
					<title>Home</title>
					<meta name="Description" content="Home" />
				</Head>
				<Header />
				<section className="Landing__Main">
					<LandingHead />
					<div id="Read__More" />
				</section>
			</Page>
		);
	}
}

export default Landing;
