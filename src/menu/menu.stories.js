import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from '.';
const stories = storiesOf('Menu', module);

const routerDecorator = storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>;
const styleDecorator = storyFn => (
	<div className="col-md-12" style={{ marginTop: '5%' }}>
		{storyFn()}
	</div>
);
stories.addDecorator(routerDecorator);
stories.addDecorator(styleDecorator);

stories.add('With only the Home Link', () => {
	const paths = [];
	return <Menu paths={paths} />;
});

stories.add('With links on the left side', () => {
	const paths = [
		{ label: 'Link1', order: 0, path: 'link1' },
		{ label: 'Link2', order: 2, path: 'link2' },
	];
	return <Menu paths={paths} />;
});

stories.add('With links on the right side', () => {
	const paths = [
		{ label: 'Link1', order: 0, path: 'link1', alignToRight: true },
		{ label: 'Link2', order: 2, path: 'link2', alignToRight: true },
	];
	return <Menu paths={paths} />;
});

stories.add('With links on the right and the left sides', () => {
	const paths = [
		{ label: 'Link1', order: 0, path: 'link1', alignToRight: false },
		{ label: 'Link2', order: 2, path: 'link2', alignToRight: true },
	];
	return <Menu paths={paths} />;
});
