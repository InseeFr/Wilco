import PropTypes from 'prop-types';
import { Link as ReactLink } from 'react-router-dom';
import React from 'react';

import './button.scss';

const DEFAULT_CLASSES = [];

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
	classes = DEFAULT_CLASSES,
	externalLink,
}) => {
	const content = label ? label : children;
	const className = `btn wilco-btn btn-lg col-md-12 ${classes.join(' ')}`;
	let button;
	if (typeof action === 'string') {
		if (externalLink) {
			button = (
				<a
					className={className}
					href={action}
					rel="noopener noreferrer"
					target="_blank"
					disabled={disabled}
				>
					{content}
				</a>
			);
		} else {
			button = (
				<Link className={className} to={action} disabled={disabled}>
					{content}
				</Link>
			);
		}
	} else {
		//if action is a function, it means a handler was passed in instead of an URL
		button = (
			<button className={className} onClick={action} disabled={disabled}>
				{content}
			</button>
		);
	}
	if (!wrapper) {
		return button;
	}

	const containerClasses = [`col-md-${col}`];
	if (offset) {
		containerClasses.push(`col-md-offset-${offset}`);
	}

	return <div className={containerClasses.join(' ')}>{button}</div>;
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
