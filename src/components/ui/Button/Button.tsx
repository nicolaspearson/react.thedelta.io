import * as React from 'react';

import './style.less';

export interface ButtonProps {
	onClick?: (event: React.FormEvent) => void;
	children?: any;
	style?: React.CSSProperties;
}

const Button = (props: ButtonProps) => {
	return (
		<button
			className="Button__Main"
			onClick={props.onClick}
			style={props.style}
		>
			{props.children}
		</button>
	);
};

export default Button;
