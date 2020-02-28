import React, { useContext } from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import { getText } from './loading-utils';
import { I18NContext } from '../context';

import './loading.scss';

const Loading = ({ textType, text }) => {
	const D = useContext(I18NContext);
	const content = text || getText(textType, D);
	return (
		<div className="bauhaus-loading">
			<ReactLoading
				className="bauhaus-loader"
				type="spinningBubbles"
				delay={0}
				height="100%"
				width="100%"
			/>
			<h3 className="bauhaus-loading-text">{content}</h3>
		</div>
	);
};

export default Loading;

Loading.propTypes = {
	textType: PropTypes.string,
	text: PropTypes.string,
};
