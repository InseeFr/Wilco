import React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from './';
import { Link } from '../button';

const items = Array.apply(null, Array(50)).map((a, i) => (
	<span key={i}>`Item ${i + 1}`</span>
));

describe('pagination', () => {
	it('renders without crashing', () => {
		shallow(<Pagination itemEls={items} itemsPerPage="10" location={{}} />);
	});

	it('returns null because of itemsPerPage is empty', () => {
		const wrapper = shallow(
			<Pagination itemEls={items} itemsPerPage="" location={{}} />
		);
		expect(wrapper.html()).toBeNull();
	});

	it('returns items per page', () => {
		const wrapper = shallow(
			<Pagination itemEls={items} itemsPerPage="10" location={{}} />
		);
		expect(wrapper.find('.list-group').children()).toHaveLength(10);
	});

	it('should enable the previous and next links if we are on the page 2', () => {
		const wrapper = shallow(
			<Pagination
				itemEls={items}
				itemsPerPage="10"
				location={{ search: '?page=2' }}
			/>
		);
		expect(wrapper.find('.disabled').length).toBe(0);
		expect(wrapper.find('a[disabled=true]').length).toBe(0);
	});

	it('should display the first page if the page query parameter is undefined', () => {
		const wrapper = shallow(
			<Pagination itemEls={items} itemsPerPage="10" location={{}} />
		);

		expect(
			wrapper
				.find('.bauhaus-pagination li')
				.at(2)
				.hasClass('active')
		).toBeTruthy();
	});
	it('should have the right number of LI', () => {
		const wrapper = shallow(
			<Pagination
				itemEls={items}
				itemsPerPage="10"
				location={{ search: '?page=5' }}
			/>
		);

		expect(wrapper.find('.bauhaus-pagination li').length).toBe(7);
	});

	it('all links should have the aria-label attributes', () => {
		const wrapper = shallow(
			<Pagination
				itemEls={items}
				itemsPerPage="10"
				location={{ search: '?page=5' }}
			/>
		);
		wrapper.find(Link).forEach(link => {
			expect(link.props()['aria-label']).toBeDefined();
		});
	});
});
