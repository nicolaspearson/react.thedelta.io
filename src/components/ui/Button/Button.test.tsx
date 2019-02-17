import { shallow } from 'enzyme';
import * as React from 'react';

import Button from './Button';

describe('Hello, Enzyme!', () => {
	it('render', () => {
		const wrapper = shallow(
			<div>
				<Button>Hello</Button>
			</div>
		);
		expect(wrapper.find('Button').html()).toMatch(/Hello/);
	});
});
