import React from 'react';
import { render } from '@testing-library/react';
import PickerItem from '.';
import { MemoryRouter } from 'react-router-dom';
describe('picker-page', () => {
	it('renders without crashing', () => {
		render(
			<PickerItem
				id="id"
				label="label"
				handleClick={() => console.log('action')}
			/>
		);
	});
	it('should have logo if the handleClick prop is defined', () => {
		const { container } = render(
			<PickerItem
				id="id"
				label="label"
				logo={<span>logo</span>}
				handleClick={() => console.log('action')}
			/>
		);
		expect(container.querySelector('li').innerHTML).toContain('logo');
	});

	it('should have links if the to prop is defined', () => {
		const { container } = render(
			<MemoryRouter>
				<PickerItem id="id" label="label" to="to" />
			</MemoryRouter>
		);
		expect(container.querySelector('a')).toBeDefined();
	});

	it('should return a basic li element', () => {
		const { container } = render(<PickerItem id="id" label="label" />);
		expect(container.querySelector('li').innerHTML).toBe('label');
	});
});
