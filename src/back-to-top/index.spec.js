import React from 'react';
import { render } from '@testing-library/react';
import BackToTop from './';

describe('BackToTop', () => {
	it('renders without crashing', () => {
		render(<BackToTop />);
	});
	it('should contain a button', () => {
		const { container } = render(<BackToTop label="Back to Top" />);
		expect(container.querySelector('button')).toBeDefined())
	});
	it('should contain the right text', () => {
		const { container } = render(<BackToTop label="Back to Top" />);
		expect(container.querySelector('button').innerHTML).toContain('Back to Top');
	});
});
