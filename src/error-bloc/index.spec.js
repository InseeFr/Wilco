import * as React from 'react';
import { render } from '@testing-library/react';
import ErrorBloc from './';

jest.mock('../build-dictionary', () => ({
	errors: {
		402: () => '402 fr',
		403: ({ idConcept }) => `${idConcept} is required`,
	},
}));
describe('error-bloc', () => {
	it('renders without crashing', () => {
		const Component = () => <ErrorBloc />;
		render(<Component />);
	});

	it('should 	 the error', () => {
		const Component = () => <ErrorBloc error="This is an error" />;
		const { container } = render(<Component />);

		const alertBoc = container.querySelector('.alert');
		expect(alertBoc.style.visibility).toEqual('visible');
		expect(alertBoc.innerHTML).toContain('This is an error');
	});

	it('should not display any error', () => {
		const Component = () => <ErrorBloc />;
		const { container } = render(<Component />);

		const alertBoc = container.querySelector('.alert');
		expect(alertBoc.style.visibility).toEqual('hidden');
	});
	it('should display an error from the dictionnay', () => {
		const Component = () => (
			<ErrorBloc error={'{"code": 402, "message": "this is a message"}'} />
		);
		const { container } = render(<Component />);

		const alertBoc = container.querySelector('.alert');
		expect(alertBoc.style.visibility).toEqual('visible');
		expect(alertBoc.innerHTML).toContain('402 fr');
	});

	it('should display an error from the dictionnay with a dynamic value', () => {
		const Component = () => (
			<ErrorBloc
				error={'{"code": 403, "message": "this is a message", "idConcept": 1}'}
			/>
		);
		const { container } = render(<Component />);

		const alertBoc = container.querySelector('.alert');
		expect(alertBoc.style.visibility).toEqual('visible');
		expect(alertBoc.innerHTML).toContain('1 is required');
	});

	it('should display an error from the dictionnay even if the code contains empty space', () => {
		const Component = () => (
			<ErrorBloc error={'{"code": 402, "message": "this is a message"}'} />
		);
		const { container } = render(<Component />);

		const alertBoc = container.querySelector('.alert');
		expect(alertBoc.style.visibility).toEqual('visible');
		expect(alertBoc.innerHTML).toContain('402 fr');
	});
});
