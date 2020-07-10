import React from 'react';
import { storiesOf } from '@storybook/react';

import Radio from '.';

const stories = storiesOf('Radio', module);

stories.add('Default', () => (
	<Radio
		id={'id'}
		label={'label'}
		answers={[
			{ value: 1, label: 'answer 1' },
			{ value: 2, label: 'answer 2' },
		]}
	/>
));
