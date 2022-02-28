import React from 'react';
import PropTypes from 'prop-types';
import './page-subtitle.scss';

const PageSubtitle = ({ subTitle }) => {
	return (
		<div className="row justify-content-md-center">
			<div className="col-md-8 text-center">
				<h3 className="wilco-page-subtitle">{subTitle}</h3>
			</div>
		</div>
	);
};

export default PageSubtitle;

PageSubtitle.proptTypes = {
	subtitle: PropTypes.string.isRequired,
};
