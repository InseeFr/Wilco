import React from 'react';
import PropTypes from 'prop-types';
import './panel.scss';

function Panel({ title, children }) {
	return (
		<div className="card wilco-panel">
			<div className="card-header">
				<h3 className="card-title">{title}</h3>
			</div>
			<div className="card-body">{children}</div>
		</div>
	);
}

Panel.propTypes = {
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	children: PropTypes.node.isRequired,
};

export default Panel;
