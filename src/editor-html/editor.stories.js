import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import MarkdownEditor from './editor-markdown';
import HtmlEditor from './';

import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Editor', module);
stories.addDecorator(withKnobs);

const styleDecorator = (storyFn) => (
	<div className="col-md-12">{storyFn()}</div>
);
stories.addDecorator(styleDecorator);

const storeDecorator = (story) => (
	<MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
);
stories.addDecorator(storeDecorator);

stories.add('Markdown editor', () => <MarkdownEditor />);
stories.add('Html editor', () => <HtmlEditor />);
