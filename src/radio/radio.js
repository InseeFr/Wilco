import React from 'react';
import { FormGroup, FormLabel, FormCheck } from 'react-bootstrap';

export default ({ id, label, answers, onChange }) => (
	<FormGroup>
		<FormLabel>{label}</FormLabel>
		<div className="text-center">
			{answers.map(({ value, label: lb }, i) => (
				<FormCheck
					key={`${id}-${i}`}
					id={`${id}-${i}`}
					name="radioGroup"
					type="radio"
					inline
					onChange={onChange}
					checked={value}
					label={lb}
				></FormCheck>
			))}
		</div>
	</FormGroup>
);
