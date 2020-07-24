import React from 'react';
import PageTitle from '../page-title';
import { PropTypes } from 'prop-types';
import D from '../build-dictionary';

const Error = ({ home }) => {
	return (
		<div>
			{home && <h1 className="text-center page-title">{D.welcome}</h1>}
			<div className="container">
				<PageTitle title={D.errorTitle} col={6} />
				<p className="text-center">{D.errorBody}</p>
			</div>
		</div>
	);
};

Error.propTypes = {
	home: PropTypes.bool,
};

export default Error;
