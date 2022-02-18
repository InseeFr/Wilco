import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormLabel, FormText } from 'react-bootstrap';
import ReactSelect from 'react-select';
import './select.scss';
import D from '../build-dictionary';

function Select({
	id,
	label,
	value,
	placeholder,
	options,
	onChange,
	unclearable,
	searchable,
	multi,
	helpMsg,
	disabled,
}) {
	const isClearable = unclearable ? false : true;
	const onChangeSelect = multi
		? (e) => onChange(e)
		: (e) => onChange(e ? e.value : '');

	return (
		<FormGroup controlId={id}>
			{label && <FormLabel>{label}</FormLabel>}{' '}
			<ReactSelect
				value={value}
				options={options}
				onChange={onChangeSelect}
				placeholder={placeholder}
				searchable={searchable}
				noResultsText={D.noResult}
				isMulti={multi}
				isClearable={isClearable}
				disabled={disabled}
				aria-label={label || placeholder}
			/>
			{helpMsg && <FormText style={{ color: 'red' }}>{helpMsg}</FormText>}
		</FormGroup>
	);
}

Select.defaultProps = {
	multi: false,
	clearable: false,
	searchable: true,
	disabled: false,
	name: '',
};

Select.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
	]),
	placeholder: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	).isRequired,
	onChange: PropTypes.func.isRequired,
	clearable: PropTypes.bool,
	searchable: PropTypes.bool,
	creatable: PropTypes.bool,
	disabled: PropTypes.bool,
	name: PropTypes.string,
};

export default Select;
