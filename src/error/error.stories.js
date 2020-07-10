import React from 'react';
import { storiesOf } from '@storybook/react';
import { I18NContext } from '../context';

import Error from './';

const stories = storiesOf('Error', module).addDecorator(function (getStory) {
	return (
		<I18NContext.Provider
			value={{
				welcome: 'welcome',
				errorTitle: 'errorTitle',
				errorBody: 'errorBody',
			}}
		>
			{getStory()}
		</I18NContext.Provider>
	);
});

stories.add('Default', () => <Error />);
