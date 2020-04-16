import React from 'react';
import { storiesOf } from '@storybook/react';
import NumberResult from '.';

storiesOf('NumberResult', module)
	.add('many', () => <NumberResult results={[1, 2, 3]} />)
	.add('one', () => <NumberResult results={[1]} />);
