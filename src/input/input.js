import React from 'react';
import {
	FormGroup,
	FormLabel,
	FormControl,
	InputGroup,
	FormText,
} from 'react-bootstrap';
import Flag from '../flag';

const Input = ({
	id,
	label,
	addOn,
	placeholder,
	value,
	onChange,
	disabled,
	col,
	flag,
	helpMsg,
}) => {
	const flagComponent = flag ? <Flag flag={flag} /> : null;
	return (
		<div className="row">
			<div className={`col-md-${col ? col : '12'}`}>
				<FormGroup controlId={id}>
					{label && (
						<FormLabel>
							{label} {flag ? '( ' : null} {flagComponent} {flag ? ' )' : null}
						</FormLabel>
					)}{' '}
					{addOn && (
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>{addOn}</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								placeholder={placeholder}
								value={value}
								onChange={onChange}
								disabled={disabled}
							/>
						</InputGroup>
					)}
					{!addOn && (
						<FormControl
							placeholder={placeholder}
							value={value}
							onChange={onChange}
							disabled={disabled}
						/>
					)}
					{helpMsg && <FormText style={{ color: 'red' }}>{helpMsg}</FormText>}
				</FormGroup>
			</div>
		</div>
	);
};

export default Input;
