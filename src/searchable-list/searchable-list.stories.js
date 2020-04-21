import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import SearchableList from '.';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Searchable list', module);
stories.addDecorator(withKnobs);

const routerDecorator = (storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>;
stories.addDecorator(routerDecorator);

export const items = [];

for (let i = 0; i < 100; i++) {
	items.push({ id: i, label: `Item ${i}` });
}

const styleDecorator = (storyFn) => (
	<div className="col-md-12">{storyFn()}</div>
);
stories.addDecorator(styleDecorator);

stories.add('Default', () => <SearchableList items={items} />);
stories.add('With a custom formatter', () => (
	<SearchableList
		items={items}
		itemFormatter={(content) => <p>🎉 {content}</p>}
	/>
));
