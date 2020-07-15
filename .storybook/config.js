import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/index.scss';

const requireAll = (requireContext) =>
	requireContext.keys().map(requireContext);

const loadStories = () =>
	requireAll(require.context('../src', true, /stories\.jsx?$/));

configure(loadStories, module);
