import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddLogo from '../logo/logo-add';
import DelLogo from '../logo/logo-del';
import Panel from '../panel';
import PickerItem from '../picker-item';
import Pagination from '../pagination';
import { filterDeburr } from '../utils/array-utils';
import D from '../build-dictionary';

const Picker = ({ items, onChange, panelTitle }) => {
	const [searchLabel, setSearchLabel] = useState('');

	const moveItem = id => {
		const newItems = items.reduce((acc, item) => {
			const { id: itemId, isAdded } = item;
			return [...acc, { ...item, isAdded: itemId === id ? !isAdded : isAdded }];
		}, []);
		onChange(newItems);
	};

	const getItemsByStatus = () => {
		const check = filterDeburr(searchLabel);
		return items.reduce(
			(byStatus, { id, label, isAdded }) => {
				if (isAdded) byStatus.added.push({ id, label });
				else check(label) && byStatus.toAdd.push({ id, label });
				return byStatus;
			},
			{ toAdd: [], added: [] }
		);
	};

	const { toAdd, added } = getItemsByStatus();

	const toAddEls = toAdd.map(({ id, label }) => (
		<PickerItem
			key={id}
			id={id}
			label={label}
			logo={AddLogo}
			handleClick={moveItem}
		/>
	));

	const addedEls = added.map(({ id, label }) => (
		<PickerItem
			key={id}
			id={id}
			label={label}
			logo={DelLogo}
			handleClick={moveItem}
		/>
	));

	return (
		<div className="row">
			<div className="col-md-6">
				<Panel title={panelTitle}>{addedEls}</Panel>
			</div>
			<div className="col-md-6 centered">
				<input
					value={searchLabel}
					onChange={e => setSearchLabel(e.target.value)}
					type="text"
					placeholder={D.searchLabelPlaceholder}
					className="form-control"
				/>
				<Pagination itemEls={toAddEls} itemsPerPage="10" />
			</div>
		</div>
	);
};

Picker.propTypes = {
	panelTitle: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	),
	onChange: PropTypes.func.isRequired,
};

export default Picker;
