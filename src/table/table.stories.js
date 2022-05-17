import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '.';
import './table.scss';

import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export const rows = [
	{
		dataField: 'col1',
		text: 'Col1',
		width: '70%',
		isKey: true,
		dataFormat: d => d.toUpperCase(),
	},
	{
		dataField: 'col2',
		text: 'Col2',
		width: '30%',
	},
];

const data = Array(20)
	.fill()
	.map((a, i) => ({ col1: `data ${i + 1} - 1`, col2: `data ${i + 1} - 2` }));

const stories = storiesOf('Table', module);
stories.addDecorator(withKnobs);

const styleDecorator = storyFn => <div className="col-md-12">{storyFn()}</div>;
stories.addDecorator(styleDecorator);

stories.add('Default', () => <Table rowParams={rows} data={data} />);

stories.add('With Custom Pagination', () => (
	<Table
		rowParams={rows}
		data={data}
		pagination={[
			{
				text: '10',
				value: 10,
			},
			{
				text: '20',
				value: 20,
			}
		]}
	/>
));

stories.add('With all props', () => (
	<Table
		rowParams={rows}
		data={data}
		search={boolean('Searchable', 'true')}
		pagination={boolean('Paginable', 'true')}
		align={text('Align', 'left')}
	/>
));
