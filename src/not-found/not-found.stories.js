import React from 'react';
import { storiesOf } from '@storybook/react';
import NotFound from './';
import { MemoryRouter } from 'react-router-dom';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Not Found', module);
stories.addDecorator(withKnobs);

const styleDecorator = (storyFn) => (
	<div className="col-md-12">
		<MemoryRouter>{storyFn()}</MemoryRouter>
	</div>
);
stories.addDecorator(styleDecorator);

stories.add('Default', () => <NotFound />);
