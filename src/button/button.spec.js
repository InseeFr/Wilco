import React from 'react';
import { shallow } from 'enzyme';
import Button from './';
import { MemoryRouter } from 'react-router-dom';
describe('button', () => {
	it('renders without crashing', () => {
		shallow(<Button action="" label="" />);
	});

	it('contains well-formed Link tag', () => {
		const wrapper = shallow(
			<MemoryRouter>
				<Button action="/home" label="myButton" />
			</MemoryRouter>
		);

		expect(wrapper.html()).toEqual(
			expect.stringContaining(
				'<a class="btn bauhaus-btn btn-lg col-md-12" href="/home">myButton</a>'
			)
		);
	});

	it('contains well-formed button tag', () => {
		const onClick = () => '';
		const wrapper = shallow(<Button action={onClick} label="myButton" />);
		const button = (
			<button className="btn bauhaus-btn btn-lg col-md-12" onClick={onClick}>
				myButton
			</button>
		);
		expect(wrapper.contains(button)).toEqual(true);
	});

	it('should contain a col-md-offset CSS class if the offset prop is defined', () => {
		const wrapper = shallow(
			<MemoryRouter>
				<Button action="/home" label="myButton" offset={2} />
			</MemoryRouter>
		);

		expect(wrapper.html()).toEqual(
			expect.stringContaining('<div class="col-md-2 col-md-offset-2">')
		);
	});
	it('should not contain a col-md-offset CSS class if the offset prop is undefined', () => {
		const wrapper = shallow(
			<MemoryRouter>
				<Button action="/home" label="myButton" />
			</MemoryRouter>
		);
		expect(wrapper.html()).toEqual(
			expect.stringContaining('<div class="col-md-2">')
		);
	});
});
