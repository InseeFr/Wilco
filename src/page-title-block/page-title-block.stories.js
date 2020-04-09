import React from 'react';
import { storiesOf } from '@storybook/react';
import PageTitle from '.';

import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('PageTitleBlock', module);
stories.addDecorator(withKnobs);

const styleDecorator = (storyFn) => (
	<div className="col-md-12">{storyFn()}</div>
);
stories.addDecorator(styleDecorator);

stories.add('Default', () => (
	<PageTitle
		titleLg1={text('Title', 'Title')}
		titleLg2={text('Title', 'Title')}
		secondLang={boolean('secondLang', true)}
	/>
));
