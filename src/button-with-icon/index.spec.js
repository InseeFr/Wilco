import React from 'react';
import { render } from '@testing-library/react';
import AbstractButton, {
	ExportButton,
	PublishButton,
	NewButton,
	CancelButton,
	SaveButton,
	DuplicateButton,
} from './';

describe('AbstractButton', () => {
	it('should call Button', () => {
		const { container } = render(<AbstractButton label="" action={() => {}} />);
		expect(container.querySelectorAll('button')).toHaveLength(1);
	});
});
describe('ExportButton', () => {
	it('should display the right icon', () => {
		const { container } = render(<ExportButton label="" action={() => {}} />);
		expect(container.querySelectorAll('button')).toHaveLength(1);
	});
});
describe('PublishButton', () => {
	it('should display the right icon', () => {
		const { container } = render(<PublishButton label="" action={() => {}} />);
		expect(container.querySelectorAll('button')).toHaveLength(1);
	});
});
describe('NewButton', () => {
	it('should display the right icon', () => {
		const { container } = render(<NewButton label="" action={() => {}} />);
		expect(container.querySelectorAll('button')).toHaveLength(1);
	});
});
describe('CancelButton', () => {
	it('should display the right icon', () => {
		const { container } = render(<CancelButton label="" action={() => {}} />);
		expect(container.querySelectorAll('button')).toHaveLength(1);
	});
});
describe('SaveButton', () => {
	it('should display the right icon', () => {
		const { container } = render(<SaveButton label="" action={() => {}} />);
		expect(container.querySelectorAll('button')).toHaveLength(1);
	});
});
describe('DuplicateButton', () => {
	it('should display the right icon', () => {
		const { container } = render(
			<DuplicateButton label="" action={() => {}} />
		);
		expect(container.querySelectorAll('button')).toHaveLength(1);
	});
});
