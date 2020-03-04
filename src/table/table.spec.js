import React from 'react';
import { render } from '@testing-library/react';
import Table from '.';

const rowParams = [{ dataField: 'total', text: 'Total', width: '100%' }];

const data = [
	{
		id: '1',
		type: 'Sub-total',
		total: 10,
	},
	{
		id: '2',
		type: 'Total',
		total: 100,
	},
];

describe('table', () => {
	it('renders without crashing', () => {
		render(<Table rowParams={rowParams} data={data} />);
	});
});
