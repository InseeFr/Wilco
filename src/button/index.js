import PropTypes from 'prop-types';
import { Link as ReactLink } from 'react-router-dom';
import React from 'react';

import './button.scss';

export const Link = ({ to, disabled, children, className, ...rest }) => {
	if (disabled) {
		return <span className={className + ' disabled'}>{children}</span>;
	}
	return (
		<ReactLink className={className} to={to} {...rest}>
			{children}
		</ReactLink>
	);
};

const Button = ({
	action,
	label,
	disabled,
	col = 2,
	offset,
	children,
	wrapper = true,
}) => {
	const content = label ? label : children;
	let button;
	if (typeof action === 'string') {
		button = (
			<Link
				className="btn wilco-btn btn-lg col-md-12"
				to={action}
				disabled={disabled}
			>
				{content}
			</Link>
		);
	} else {
		//if action is a function, it means a handler was passed in instead of an URL
		button = (
			<button
				className="btn wilco-btn btn-lg col-md-12"
				onClick={action}
				disabled={disabled}
			>
				{content}
			</button>
		);
	}
	if (!wrapper) {
		return button;
	}

	const classes = [`col-md-${col}`];
	if (offset) {
		classes.push(`col-md-offset-${offset}`);
	}

	return <div className={classes.join(' ')}>{button}</div>;
};

Button.propTypes = {
	action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	col: PropTypes.number,
	offset: PropTypes.number,
	disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	wrapper: PropTypes.bool,
};

export default Button;
