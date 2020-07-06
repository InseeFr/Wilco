import React from 'react';
import { PageTitle, Button } from '../';
import D from '../build-dictionary';

export default () => (
	<div className="container">
		<PageTitle title={D.notFoundTitle} />
		<div className="row">
			<div className="col-md-5" />
			<Button className="col-md-offset-5" label={D.home} action="/" />
		</div>
	</div>
);
