import React from 'react';
import { storiesOf } from '@storybook/react';
import BackToTop from '.';

const stories = storiesOf('Back to Top', module);

stories.add('Default', () => {
	const lis = [];
	for (let i = 0; i < 1000; i++) {
		lis.push(<li>{i}</li>);
	}
	return (
		<React.Fragment>
			<ul>{lis}</ul>
			<BackToTop label="Click me" />
		</React.Fragment>
	);
});
