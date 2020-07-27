import React from 'react';
import { render } from '@testing-library/react';
import VerticalMenu from './';

describe('<VerticalMenu />', () => {
	it('render if there is no buttons', () => {
		render(<VerticalMenu />);
	});
	it('render if there is one child', () => {
		const { container } = render(
			<VerticalMenu>
				<button>1</button>
			</VerticalMenu>
		);
		expect(container.querySelectorAll('button')).toHaveLength(1);
	});
	it('render if there is mor than one children', () => {
		const { container } = render(
			<VerticalMenu>
				<button>1</button>
				<button>2</button>
			</VerticalMenu>
		);
		expect(container.querySelectorAll('button')).toHaveLength(2);
	});
});
