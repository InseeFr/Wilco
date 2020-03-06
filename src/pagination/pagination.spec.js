import React from 'react';
import { render } from '@testing-library/react';
import { Pagination } from './';
import { MemoryRouter } from 'react-router-dom';
const items = Array.apply(null, Array(50)).map((a, i) => (
	<span key={i}>`Item ${i + 1}`</span>
));

describe('pagination', () => {
	it('renders without crashing', () => {
		render(
			<MemoryRouter>
				<Pagination itemEls={items} itemsPerPage="10" location={{}} />
			</MemoryRouter>
		);
	});

	it('returns null because of itemsPerPage is empty', () => {
		const { container } = render(
			<MemoryRouter>
				<Pagination itemEls={items} itemsPerPage="" location={{}} />
			</MemoryRouter>
		);
		expect(container.innerHTML).toBe('');
	});

	it('returns items per page', () => {
		const { container } = render(
			<MemoryRouter>
				<Pagination itemEls={items} itemsPerPage="10" location={{}} />
			</MemoryRouter>
		);
		expect(container.querySelector('.list-group').children).toHaveLength(10);
	});

	it('should enable the previous and next links if we are on the page 2', () => {
		const { container } = render(
			<MemoryRouter>
				<Pagination
					itemEls={items}
					itemsPerPage="10"
					location={{ search: '?page=2' }}
				/>
			</MemoryRouter>
		);
		expect(container.querySelectorAll('.disabled')).toHaveLength(0);
		expect(container.querySelectorAll('a[disabled=true]')).toHaveLength(0);
	});

	it('should display the first page if the page query parameter is undefined', () => {
		const { container } = render(
			<MemoryRouter>
				<Pagination itemEls={items} itemsPerPage="10" location={{}} />
			</MemoryRouter>
		);

		expect(
			container.querySelector('.bauhaus-pagination li:nth-child(3)').className
		).toContain('active');
	});
	it('should have the right number of LI', () => {
		const { container } = render(
			<MemoryRouter>
				<Pagination
					itemEls={items}
					itemsPerPage="10"
					location={{ search: '?page=5' }}
				/>
			</MemoryRouter>
		);

		expect(container.querySelectorAll('.bauhaus-pagination li')).toHaveLength(
			7
		);
	});

	it('all links should have the aria-label attributes', () => {
		const { container } = render(
			<MemoryRouter>
				<Pagination
					itemEls={items}
					itemsPerPage="10"
					location={{ search: '?page=5' }}
				/>
			</MemoryRouter>
		);
		const links = container.querySelectorAll('a');
		for (let i = 0; i < links.length; i++) {
			expect(links[i].getAttribute('aria-label')).toBeDefined();
		}
	});
});
