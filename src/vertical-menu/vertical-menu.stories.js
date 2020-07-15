import React from 'react';
import { storiesOf } from '@storybook/react';

import VerticalMenu from './';
import Button from '../button';

const stories = storiesOf('VerticalMenu', module);

stories.add('Default', () => (
	<VerticalMenu>
		<Button col={12}>action 1</Button>
		<Button col={12}>action 2</Button>
	</VerticalMenu>
));
