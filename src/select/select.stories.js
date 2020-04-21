import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './select';

import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Select', module);
stories.addDecorator(withKnobs);

const styleDecorator = (storyFn) => (
	<div className="col-md-12">{storyFn()}</div>
);
stories.addDecorator(styleDecorator);

const options = [
	{ value: '1', label: '1' },
	{ value: '2', label: '2' },
	{ value: '3', label: '3' },
];

stories.add('Default', () => (
	<Select label="label" value={options[0]} options={options} />
));

stories.add('With multiple values', () => (
	<Select
		label="label"
		value={[options[0], options[1]]}
		multi={true}
		options={options}
	/>
));

stories.add('Clearable select', () => (
	<Select
		label="label"
		value={options[0]}
		options={options}
		unclearable={false}
	/>
));
