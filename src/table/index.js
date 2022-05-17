import React, { Fragment } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import paginationFactory from 'react-bootstrap-table2-paginator';

import './table.scss';
import D from '../build-dictionary';
const { SearchBar } = Search;

const defaultSizePerPageListOption = [
	{
		text: '5',
		value: 5,
	},
	{
		text: '10',
		value: 10,
	}
];

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
		const optionOption = [
			...(Array.isArray(pagination) ? pagination : defaultSizePerPageListOption),
			{
				text: D.allTitle,
				value: data.length,
			}
		]
		plugins.pagination = paginationFactory({
			totalSize: data.length,
			sizePerPageList: optionOption
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
			<div className={`${cssClass} wilco-table pagination marginTop`}>
				<ToolkitProvider keyField="id" columns={columns} data={data} search>
					{props => (
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

Table.defaultProps = {
	onRowClick: () => {},
};

export default Table;
