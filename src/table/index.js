import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import paginationFactory from 'react-bootstrap-table2-paginator';

import './table.scss';
import D from '../build-dictionary';
const { SearchBar } = Search;

/**
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

<Table rowParams={rowParams} data={data} />
 */
const Table = ({
	rowParams,
	data,
	search,
	pagination,
	cssClass,
	onRowClick,
	align = 'center',
}) => {
	const plugins = {};
	if (pagination) {
		plugins.pagination = paginationFactory({
			totalSize: data.length,
			sizePerPageList: [
				{
					text: '5',
					value: 5,
				},
				{
					text: '10',
					value: 10,
				},
				{
					text: D.allTitle,
					value: data.length,
				},
			],
		});
	}

	const rowEvents = {
		onClick: onRowClick,
	};

	const columns = rowParams.map(
		({ dataField, text, width, formatter, sort }) => ({
			dataField,
			text,
			sort,
			align: align,
			headerStyle: () => {
				return { width };
			},
			formatter,
		})
	);
	return (
		<Fragment>
			<div className={`${cssClass} wilco-table marginTop`}>
				<ToolkitProvider keyField="id" columns={columns} data={data} search>
					{(props) => (
						<Fragment>
							{search && (
								<SearchBar
									placeholder={D.searchTablePlaceholder}
									className="search-bar"
									{...props.searchProps}
								/>
							)}
							<BootstrapTable
								striped={true}
								hover={true}
								tableBodyClass="hover"
								noDataIndication={() => D.noDataTitle}
								rowEvents={rowEvents}
								{...props.baseProps}
								{...plugins}
							/>
						</Fragment>
					)}
				</ToolkitProvider>
			</div>
		</Fragment>
	);
};

Table.propTypes = {
	rowParams: PropTypes.array,
	data: PropTypes.array,
	search: PropTypes.bool,
	pagination: PropTypes.bool,
	cssClass: PropTypes.string,
	onRowClick: PropTypes.func,
	align: PropTypes.string,
};

Table.defaultProps = {
	onRowClick: () => {},
};

export default Table;
