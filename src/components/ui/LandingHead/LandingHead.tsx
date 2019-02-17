import * as React from 'react';

import Button from '@bit/nicolaspearson.interaction.button';

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
					<Button className="Read__More__Button">
						<a href="#Below__Layout__Head">Read More</a>
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
