import React from 'react';
import { storiesOf } from '@storybook/react';
import ExplanatoryNote from './';

import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const html = `
	<div>
		<p>ExplanatoryNote body</p>
		<p>
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
			</ul>
		</p>
	</div>`;

const stories = storiesOf('ExplanatoryNote', module);
stories.addDecorator(withKnobs);

const styleDecorator = (storyFn) => (
	<div className="col-md-12">{storyFn()}</div>
);
stories.addDecorator(styleDecorator);

stories.add('Default', () => (
	<ExplanatoryNote
		title={text('Title', 'ExplanatoryNote title')}
		text={text('Text', 'ExplanatoryNote body')}
		lang="fr"
	/>
));

// Hack to keep html unescaped
stories.add('With html content', () => (
	<ExplanatoryNote
		title={text('Title', 'Classification panel title')}
		text={text('Text', html).replace(/&lt;/g, '<').replace(/&gt;/g, '>')}
		lang="fr"
	/>
));

// Hack to keep html unescaped
stories.add('With all props', () => (
	<ExplanatoryNote
		title={text('Title', 'ExplanatoryNote title')}
		text={text('Text', html).replace(/&lt;/g, '<').replace(/&gt;/g, '>')}
		lang={text('Lang', 'en')}
		alone={boolean('Alone', true)}
	/>
));
