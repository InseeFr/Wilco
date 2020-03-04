import React from 'react';
import { render } from '@testing-library/react';
import BackToTop from './';

describe('BackToTop', () => {
	it('renders without crashing', () => {
		render(<BackToTop />);
	});
	it('should contain a href=# link', () => {
		const { container } = render(<BackToTop label="Back to Top" />);
		expect(container.querySelector('a').href).toContain('#');
	});
	it('should contain the right text', () => {
		const { container } = render(<BackToTop label="Back to Top" />);
		expect(container.querySelector('a').innerHTML).toContain('Back to Top');
	});
});
