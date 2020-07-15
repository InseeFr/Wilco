import React from 'react';
import { render } from '@testing-library/react';
import Input from './input';

describe('input', () => {
	it('renders without crashing', () => {
		render(
			<Input
				id="id"
				label="label"
				placeholder="placeholder"
				value="value"
				onChange={() => 'onChange'}
			/>
		);
	});

	it('should display a FormLabel component with the label', () => {
		const { container } = render(
			<Input
				id="id"
				label="label"
				placeholder="placeholder"
				value="value"
				onChange={() => 'onChange'}
			/>
		);
		expect(container.querySelectorAll('.form-label')).toHaveLength(1);
	});
	it('should display a FormLabel component with the label and flag', () => {
		const { container } = render(
			<Input
				id="id"
				label="label"
				placeholder="placeholder"
				value="value"
				flag="fr"
				onChange={() => 'onChange'}
			/>
		);
		expect(container.querySelectorAll('.form-label')).toHaveLength(1);
		expect(container.querySelectorAll('.img-flag')).toHaveLength(1);
	});
	it('should not display a FormLabel component ', () => {
		const { container } = render(
			<Input
				id="id"
				placeholder="placeholder"
				value="value"
				onChange={() => 'onChange'}
			/>
		);
		expect(container.querySelectorAll('.form-label')).toHaveLength(0);
	});
});
