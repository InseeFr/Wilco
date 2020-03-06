import React from 'react';
import { render } from '@testing-library/react';
import Panel from './';

describe('panel', () => {
	it('renders without crashing', () => {
		render(<Panel title="title">body</Panel>);
	});

	it('returns component title', () => {
		const { container } = render(<Panel title="title">body</Panel>);
		expect(container.querySelector('.panel-title').innerHTML).toEqual('title');
	});

	it('returns component title (element)', () => {
		const { container } = render(<Panel title={<div>title</div>}>body</Panel>);
		expect(container.querySelector('.panel-title div').innerHTML).toBe('title');
	});

	it('returns panel body', () => {
		const { container } = render(<Panel title={<div>title</div>}>body</Panel>);
		expect(container.querySelector('.panel-body').innerHTML).toBe('body');
	});
});
