import * as React from 'react';

import Logo from '@components/icon/Logo';
import Button from '@components/ui/Button';
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
					<Button style={{
						height: '40px',
						fontSize: '12px',
						fontWeight: 'bold',
						borderRadius: '25px',
						paddingLeft: '30px',
						paddingRight: '30px'
					}}>
						Read More
					</Button>
				</section>
			</section>
			<section className="Image__Wrapper HiddenAtMd">
				<Logo />
			</section>
		</section>
	</section >
);

export default LandingHead;
