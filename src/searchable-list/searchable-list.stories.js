import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import SearchableList from '.';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Searchable list', module);
stories.addDecorator(withKnobs);

const routerDecorator = storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>;
stories.addDecorator(routerDecorator);

export const items = [
	{ id: '1', label: 'First item' },
	{ id: '2', label: 'Second item' },
];

const styleDecorator = storyFn => <div className="col-md-12">{storyFn()}</div>;
stories.addDecorator(styleDecorator);

stories.add('Default', () => <SearchableList items={items} />);
