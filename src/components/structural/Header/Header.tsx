import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { Flag } from '@models/Flag';

import { RouteNames } from '@enums/RouteNames';

import { FlagStore } from '@store/FlagStore';

import RouterLink from '@components/functional/RouterLink';
import Hamburger from '@components/icon/Hamburger';
import Logo from '@components/icon/Logo';
import SiteNav from '@components/structural/SiteNav';

import './style.less';

export interface HeaderProps {
	children?: any;
	flagStore?: FlagStore;
}

@inject('flagStore')
@observer
class Header extends React.Component<HeaderProps> {
	private onToggleNav = (flags: Flag[]) => {
		if (this.props.flagStore) {
			if (flags.some((flag: Flag) => flag.name === 'site-nav.open')) {
				this.props.flagStore.deleteFlag('site-nav.open');
			} else {
				const newFlag: Flag = {
					name: 'site-nav.open'
				};
				this.props.flagStore.addFlag(newFlag);
			}
		}
	};

	private closeNav = () => {
		if (this.props.flagStore) {
			this.props.flagStore.deleteFlag('site-nav.open');
		}
	};

	public render() {
		const { flagStore } = this.props;
		return (
			<header>
				<section className="Header">
					<div className="Header__Background" />
					<div className="Header__Inner Top">
						<nav className="Header__Bar">
							<RouterLink routeName={RouteNames.HOME}>
								<div className="Header__Logo">
									<section className="Logo__Circle">
										<Logo />
									</section>
								</div>
							</RouterLink>

							<div className="Header__Nav__Toggle">
								<span
									onClick={() => this.onToggleNav(flagStore ? flagStore.flags : [])}
									className="SiteNav__Hamburger"
								>
									<Hamburger />
								</span>
							</div>

							<SiteNav
								isOpen={
									flagStore && flagStore.flags.some((flag: Flag) => flag.name === 'site-nav.open')
								}
								closeNav={this.closeNav}
							/>
						</nav>
					</div>
					<div className="Header__Separator" />
					{this.props.children}
				</section>
			</header>
		);
	}
}

export default Header;