import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './';

const stories = storiesOf('Input', module);

stories.add('Default', () => (
	<Input label={'label'} helpMsg={'helpMsg'} value={'value'} />
));

stories.add('With Addon', () => (
	<Input label={'label'} addOn={'$'} helpMsg={'helpMsg'} value={'value'} />
));
