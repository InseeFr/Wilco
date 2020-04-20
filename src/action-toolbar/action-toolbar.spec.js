import React from 'react';
import { render } from '@testing-library/react';
import ActionToolbar from './';

describe('<ActionToolbar />', () => {
	it('should return the right html', () => {
		const { container } = render(<ActionToolbar> content </ActionToolbar>);
		expect(
			container.querySelector('.wilco-action-toolbar').innerHTML
		).toContain('content');
	});
});
