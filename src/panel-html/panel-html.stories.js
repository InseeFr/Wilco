import React from 'react';
import { storiesOf } from '@storybook/react';
import PanelHtml from './';

import { withKnobs, text } from '@storybook/addon-knobs';

const html = `<div>
		<p>PanelHtml body</p>
		<p>
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
			</ul>
		</p>
	</div>`;

const stories = storiesOf('Panel-Html', module);
stories.addDecorator(withKnobs);

const styleDecorator = (storyFn) => (
	<div className="col-md-12">{storyFn()}</div>
);
stories.addDecorator(styleDecorator);

stories.add('Default', () => (
	<PanelHtml title={text('Title', 'PanelHtml title')}>
		{text('Children', 'PanelHtml body')}
	</PanelHtml>
));

// Hack to keep html unescaped
stories.add('With html content', () => (
	<PanelHtml
		title={text('Title', 'Classification panel title')}
		context="classifications"
	>
		{text('Children', html).replace(/&lt;/g, '<').replace(/&gt;/g, '>')}
	</PanelHtml>
));

// Hack to keep html unescaped
stories.add('With all props', () => (
	<PanelHtml
		title={text('Title', 'PanelHtml title')}
		context={text('Context', '')}
	>
		{text('Children', html).replace(/&lt;/g, '<').replace(/&gt;/g, '>')}
	</PanelHtml>
));
