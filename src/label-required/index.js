import React from 'react';
import './label-required.scss';

export default ({ children, ...props }) => {
	return (
		<label {...props} className="wilco-label-required">
			{children}
			<span className="asterisk">*</span>
		</label>
	);
};
