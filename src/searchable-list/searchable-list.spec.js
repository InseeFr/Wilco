import React from 'react';
import { shallow } from 'enzyme';
import SearchableList from '.';

const items = Array.apply(null, Array(50)).map((a, i) => ({
	id: `${i + 1}`,
	label: `Item ${i + 1}`,
}));

describe('SearchableList', () => {
	it('renders without crashing', () => {
		shallow(<SearchableList items={items} childPath="concept" />);
	});
});
