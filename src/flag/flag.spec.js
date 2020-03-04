import React from 'react';
import { render } from '@testing-library/react';

import Flag from './';

describe('flag', () => {
	it('should return null if the flag is not defined', () => {
		const { container } = render(<Flag flag={null} />);
		expect(container.innerHTML).toBe('');
	});
	it('should return an image if the flag is defined', () => {
		const { container } = render(<Flag flag="fr" />);

		const img = container.querySelector('img');
		expect(img.src).toBe('http://localhost/fr');
		expect(img.alt).toBe('flag');
	});
});
