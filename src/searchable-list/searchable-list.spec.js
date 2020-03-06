import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchableList from '.';

const items = Array.apply(null, Array(50)).map((a, i) => ({
	id: `${i + 1}`,
	label: `Item ${i + 1}`,
}));

describe('SearchableList', () => {
	it('renders without crashing', () => {
		render(
			<MemoryRouter>
				<SearchableList items={items} childPath="concept" />
			</MemoryRouter>
		);
	});
});
