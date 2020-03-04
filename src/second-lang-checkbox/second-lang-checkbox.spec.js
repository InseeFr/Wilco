import React from 'react';
import { render } from '@testing-library/react';
import CheckSecondLang from './';

describe('second-lang-checkbox', () => {
	it('renders without crashing', () => {
		render(
			<CheckSecondLang
				secondLang={true}
				onChange={() => console.log('check')}
			/>
		);
	});
});
