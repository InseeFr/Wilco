import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Button from './';

const stories = storiesOf('Button', module);

stories.add('Default', () => (
	<Button label="Click me" action={() => console.log('Click')} />
));

stories.add('Disabled', () => (
	<Button
		label="Click me"
		action={() => console.log('Click')}
		disabled={true}
	/>
));

stories.add('Using children', () => (
	<Button action={() => console.log('Click')}>Click me</Button>
));

stories.add('Link', () => (
	<MemoryRouter>
		<Button action="#">Click me</Button>
	</MemoryRouter>
));

stories.add('Disabled Link', () => (
	<MemoryRouter>
		<Button action="#" disabled>
			Click me
		</Button>
	</MemoryRouter>
));
