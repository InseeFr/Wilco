import React from 'react';
import { render } from '@testing-library/react';
import PickerItem from '.';

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
});
