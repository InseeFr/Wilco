import React from 'react';
import PropTypes from 'prop-types';
import './page-title.scss';

/**
 *
 * @param {{title:string, subtitle:string?, col: number?, offset: number?, context:string}} props
 */
function PageTitle({ title, subtitle, col = 10 }) {
	return (
		<div className="row wilco-page-title justify-content-md-center">
			<div className={`col-md-${col} wilco-page-title__block`}>
				<h1 className="wilco-page-title__title ">
					{title}
					{subtitle && <div>&quot; {subtitle} &quot;</div>}
				</h1>
			</div>
		</div>
	);
}

PageTitle.proptTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
};

export default PageTitle;
