import React from 'react';
import { storiesOf } from '@storybook/react';
import ActionsToolbar from '.';
import Button from '../button';

import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('ActionsToolbar', module);
stories.addDecorator(withKnobs);

const styleDecorator = (storyFn) => (
	<div className="col-md-10 justify-content-md-center">{storyFn()}</div>
);
stories.addDecorator(styleDecorator);

stories.add('Default', () => (
	<ActionsToolbar>
		<Button label="Button 1" action={() => console.log('Click')} />
		<Button label="Button 2" action={() => console.log('Click')} />
	</ActionsToolbar>
));
