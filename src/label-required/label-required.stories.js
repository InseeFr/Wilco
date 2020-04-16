import React from 'react';
import { storiesOf } from '@storybook/react';
import LabelRequired from './';

storiesOf('LabelRequired', module).add('default', () => (
	<LabelRequired>Label</LabelRequired>
));
