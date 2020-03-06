import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PagePicker from '.';

const items = [{ id: '1', label: 'Item 1' }];

describe('picker-page', () => {
	it('renders without crashing', () => {
		render(
			<MemoryRouter>
				<PagePicker
					items={items}
					onChange={jest.fn()}
					title="title"
					panelTitle="panelTitle"
					labelWarning="labelWarning"
					labelValidateButton="labelValidateButton"
					handleAction={() => console.log('action')}
					context="concepts"
				/>
			</MemoryRouter>
		);
	});
});
