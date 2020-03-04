import React from 'react';
import { render } from '@testing-library/react';
import Button from './';
import { MemoryRouter } from 'react-router-dom';

describe('button', () => {
	it('renders without crashing', () => {
		render(
			<MemoryRouter>
				<Button action="" label="" />
			</MemoryRouter>
		);
	});

	it('contains well-formed Link tag', () => {
		const { container } = render(
			<MemoryRouter>
				<Button action="/home" label="myButton" />
			</MemoryRouter>
		);

		expect(container.innerHTML).toEqual(
			expect.stringContaining(
				'<a class="btn bauhaus-btn btn-lg col-md-12" href="/home">myButton</a>'
			)
		);
	});

	it('contains well-formed button tag', () => {
		const onClick = () => '';
		const { container } = render(<Button action={onClick} label="myButton" />);
		expect(container.querySelector('button').innerHTML).toEqual('myButton');
	});

	it('should contain a col-md-offset CSS class if the offset prop is defined', () => {
		const { container } = render(
			<MemoryRouter>
				<Button action="/home" label="myButton" offset={2} />
			</MemoryRouter>
		);

		expect(container.innerHTML).toEqual(
			expect.stringContaining('<div class="col-md-2 col-md-offset-2">')
		);
	});
	it('should not contain a col-md-offset CSS class if the offset prop is undefined', () => {
		const { container } = render(
			<MemoryRouter>
				<Button action="/home" label="myButton" />
			</MemoryRouter>
		);
		expect(container.innerHTML).toEqual(
			expect.stringContaining('<div class="col-md-2">')
		);
	});
});
