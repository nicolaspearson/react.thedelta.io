import { Button } from 'antd';
import * as React from 'react';

import Logo from '@components/icon/Logo';
import ParticleBackground from '@components/ui/ParticleBackground';

import './style.less';

export interface LandingHeadProps {
	// Empty
}

const LandingHead = (props: LandingHeadProps) => (
	<section>
		<section className="Landing__Head">
			<div className="Landing__Particles__Container">
				<ParticleBackground />
			</div>
			<section className="Text__Wrapper">
				<h1>The Delta</h1>
				<p>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum sit amet
						libero eu facilisis.
					</span>
				</p>
				<section className="Text__Wrapper__Buttons">
					<Button className="Button" type="primary">
						Login
					</Button>
					<Button className="Button" type="primary">
						Sign Up
					</Button>
				</section>
			</section>
			<section className="Image__Wrapper HiddenAtMd">
				<Logo />
			</section>
		</section>
	</section>
);

export default LandingHead;
