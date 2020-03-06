import React from 'react';
import { render } from '@testing-library/react';

import Error from './';

describe('error', () => {
	it('renders without crashing', () => {
		render(<Error />);
	});

	it('returns false without home props', () => {
		const { container } = render(<Error />);
		expect(container.querySelectorAll('h1.page-title')).toHaveLength(0);
	});

	it('returns true with home props', () => {
		const { container } = render(<Error home />);
		expect(container.querySelectorAll('h1.page-title')).toHaveLength(1);
	});

	it('returns true if contains h1 and a paragraph', () => {
		const { container } = render(<Error />);
		expect(container.querySelectorAll('.container h1')).toHaveLength(1);
		expect(container.querySelectorAll('.container p')).toHaveLength(1);
	});
});
