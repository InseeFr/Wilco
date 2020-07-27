import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const VerticalMenu = ({ children }) => {
	const buttons = Array.isArray(children) ? children : [children];
	return (
		<div className="col-md-3 btn-group-vertical">
			{buttons.map((child, index) => (
				<div key={index} className="row">
					<div className="col-md-12">{child}</div>
				</div>
			))}
		</div>
	);
};

VerticalMenu.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
VerticalMenu.defaultProps = {
	children: [],
};

export default VerticalMenu;
