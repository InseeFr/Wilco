import React, { useState, useCallback } from 'react';
import { PropTypes } from 'prop-types';
import D from '../build-dictionary';
import {
	PageTitle,
	ExportButton,
	Pagination,
	Panel,
	ErrorBloc,
	AddLogo,
	DelLogo,
	PickerItem,
	ActionToolbar,
	filterDeburr,
	ReturnButton,
} from '../';

const Picker = ({
	title,
	panelTitle,
	labelWarning,
	labelValidateButton,
	backUrl,
	items,
	handleAction,
}) => {
	const [searchLabel, setSearchLabel] = useState('');
	const [trackItems, setTrackItems] = useState(
		items.map(({ id, label }) => ({
			id,
			label,
			isAdded: false,
		}))
	);

	const addItem = useCallback(
		(id) => {
			setTrackItems(
				trackItems.map((item) => {
					if (item.id !== id) {
						return item;
					}
					return {
						...item,
						isAdded: true,
					};
				})
			);
		},
		[trackItems]
	);

	const removeItem = useCallback(
		(id) => {
			setTrackItems(
				trackItems.map((item) => {
					if (item.id !== id) {
						return item;
					}
					return {
						...item,
						isAdded: false,
					};
				})
			);
		},
		[trackItems]
	);

	const handleClickValid = useCallback(
		(e) => {
			const added = trackItems.filter(({ isAdded }) => isAdded);
			const addedIds = added.map(({ id }) => id);
			console.log(addedIds);
			handleAction(addedIds);
		},
		[handleAction, trackItems]
	);

	const getItemsByStatus = (items) => {
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
	const { toAdd, added } = getItemsByStatus(trackItems);

	const toAddEls = toAdd.map(({ id, label }) => (
		<PickerItem
			key={id}
			id={id}
			label={label}
			logo={AddLogo}
			handleClick={addItem}
		/>
	));

	const addedEls = added.map(({ id, label }) => (
		<PickerItem
			key={id}
			id={id}
			label={label}
			logo={DelLogo}
			handleClick={removeItem}
		/>
	));

	//The user has to add at least one item
	const message = added.length === 0 && labelWarning;

	const controls = (
		<ActionToolbar>
			<ReturnButton action={`/${backUrl}`} />
			<ExportButton
				label={labelValidateButton}
				action={handleClickValid}
				disabled={added.length === 0}
			/>
		</ActionToolbar>
	);

	return (
		<div>
			<div className="container">
				<PageTitle title={title} />
				{controls}
				<ErrorBloc error={message} />

				<div className="row">
					<div className="col-md-6">
						<Panel title={panelTitle}>{addedEls}</Panel>
					</div>
					<div className="col-md-6 text-center">
						<input
							value={searchLabel}
							onChange={(e) => setSearchLabel(e.target.value)}
							type="text"
							placeholder={D.searchLabelPlaceholder}
							className="form-control"
						/>
						<Pagination itemEls={toAddEls} itemsPerPage="10" />
					</div>
				</div>
			</div>
		</div>
	);
};

Picker.propTypes = {
	title: PropTypes.string.isRequired,
	panelTitle: PropTypes.string.isRequired,
	labelWarning: PropTypes.string.isRequired,
	labelValidateButton: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	), //not required since this component can be created before the items are
	//loaded
	handleAction: PropTypes.func.isRequired,
	backUrl: PropTypes.string.isRequired,
};

export default Picker;
