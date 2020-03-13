import React from 'react';
import { render } from '@testing-library/react';
import PageSubtitle from '.';

describe('page-subTitle', () => {
	it('renders without crashing', () => {
		render(<PageSubtitle subTitle="subTitle" />);
	});

	it('returns component subtitle', () => {
		const { container } = render(<PageSubtitle subTitle="subTitle" />);
		expect(container.querySelector('.wilco-page-subtitle').innerHTML).toEqual(
			'subTitle'
		);
	});

	it('returns component into row', () => {
		const { container } = render(<PageSubtitle subTitle="subTitle" />);
		expect(container.querySelectorAll('.row')).toHaveLength(1);
	});
});
