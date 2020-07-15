import React from 'react';
import { render } from '@testing-library/react';
import Select from './select';

const options = Array.apply(null, Array(5)).map((a, i) => ({
	value: `${i + 1}`,
	label: `Option ${i + 1}`,
}));

describe('select', () => {
	it('renders without crashing', () => {
		render(
			<Select
				value="value"
				placeholder="..."
				options={options}
				onChange={() => ''}
			/>
		);
	});
	it('should display a HelpBlock if the FormText is defined', () => {
		const { container } = render(
			<Select
				value="value"
				placeholder="..."
				options={options}
				onChange={() => ''}
				helpMsg="helpMsg"
			/>
		);
		expect(container.querySelectorAll('small')).toHaveLength(1);
	});
	it('should not display a HelpBlock if the FormText is undefined', () => {
		const { container } = render(
			<Select
				value="value"
				placeholder="..."
				options={options}
				onChange={() => ''}
			/>
		);
		expect(container.querySelectorAll('small')).toHaveLength(0);
	});
});
