import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../page-title';
import PageSubtitle from '../page-subtitle';

function PageTitleBlock({ titleLg1, titleLg2, secondLang }) {
	return (
		<>
			<PageTitle title={titleLg1} />
			{secondLang && titleLg2 && <PageSubtitle subTitle={titleLg2} />}
		</>
	);
}

PageTitleBlock.proptTypes = {
	titleLg1: PropTypes.string.isRequired,
	titleLg2: PropTypes.string,
	secondLang: PropTypes.bool,
};

export default PageTitleBlock;
