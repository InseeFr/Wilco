import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Picker from '.';

import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('Picker', module);
stories.addDecorator(withKnobs);

const routerDecorator = storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>;
stories.addDecorator(routerDecorator);

const styleDecorator = storyFn => (
	<div className="col-md-10 col-md-offset-1">{storyFn()}</div>
);
stories.addDecorator(styleDecorator);

const items = Array(99)
	.fill()
	.map((a, i) => ({ id: `${i}`, label: `Item ${i + 1}` }));

stories.add('Default', () => (
	<Picker
		items={items}
		panelTitle={text('Panel title', 'Panel title')}
		onChange={console.log}
		context="concepts"
	/>
));
