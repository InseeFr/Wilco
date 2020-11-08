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
	it('should contain a root div with the right css class', () => {
		const { container } = render(
			<Table rowParams={rowParams} data={data} cssClass="cssClass" />
		);
		expect(container.querySelector('.wilco-table.cssClass')).not.toBeNull();
	});
	it('should not contain a search bar by default', () => {
		const { container } = render(<Table rowParams={rowParams} data={data} />);
		expect(container.querySelector('.search-bar')).toBeNull();
	});
	it('should contain a search bar', () => {
		const { container } = render(
			<Table rowParams={rowParams} data={data} search={true} />
		);
		expect(container.querySelector('.search-bar')).not.toBeNull();
	});
	it('should not contain a pagination by default', () => {
		const { container } = render(<Table rowParams={rowParams} data={data} />);
		expect(
			container.querySelector('.react-bs-table-sizePerPage-dropdown')
		).toBeNull();
	});
	it('should contain a pagination', () => {
		const { container } = render(
			<Table rowParams={rowParams} data={data} pagination={true} />
		);
		expect(
			container.querySelector('.react-bs-table-sizePerPage-dropdown')
		).not.toBeNull();
	});
	it('should contain a table with 2 rows', () => {
		const { container } = render(
			<Table rowParams={rowParams} data={data} search={true} />
		);
		expect(container.querySelectorAll('tbody tr')).toHaveLength(2);
	});
	it('should contain a table with 1 column per row', () => {
		const { container } = render(
			<Table rowParams={rowParams} data={data} search={true} />
		);
		expect(container.querySelectorAll('tbody td')).toHaveLength(2);
	});
});
