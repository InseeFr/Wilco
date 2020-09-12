import React from 'react';
import D from '../build-dictionary';
import { Link } from 'react-router-dom';

import './menu.scss';

const WITH_SEPARATOR_CLASS = 'with-separator';
const defaultHome = { label: D.home, path: '/' };

function getClasses(path, index, paths) {
	return [
		'nav-item',
		path.className,
		!paths[index + 1] ? '' : WITH_SEPARATOR_CLASS,
	]
		.join(' ')
		.trim();
}

/**
 * The first parameter you should define is the paths prop. This prop is an array
 * of menu items. Each item can have multiple propery :
 * * `label` : the label that will be displayed (or used as an aria-label if we used an image)
 * * `image` : the path to an image you want to use as a menu item
 * * `path` : The URL of the target page
 * * `alignToRight`: The item should be aligned on the left or on the right ?
 * * `order` : a numeric value in order to define the order of each items.
 *
 * const paths = [
 * 	{label: 'label1', order: 0, path: '/label1'},
 *  {label: 'label2', order: 1, path: '/label2'},
 * ]
 *
 * return <Menu paths={paths} />
 *
 * By default, we will add as a first item a link to the home page. You can also override this property thanks to the home
 * prop.
 *
 * const paths = [
 * 	{label: 'label1', order: 0, path: '/label1'},
 *  {label: 'label2', order: 1, path: '/label2'},
 * ]
 *
 * const home = {label: 'Home', path: '/'},
 * return <Menu paths={paths} home={home}/>
 */
export default ({ paths, home = defaultHome }) => {
	const orderedPaths = paths
		.filter((path) => path.shouldBeDisplayed !== false)
		.sort((p1, p2) => p1.order - p2.order);
	const allPaths = [home, ...orderedPaths].reduce(
		(acc, path) => {
			if (path.alignToRight) {
				return [[...acc[0]], [...acc[1], path]];
			} else {
				return [[...acc[0], path], [...acc[1]]];
			}
		},
		[[], []]
	);

	return (
		<nav className="wilco-menu navbar navbar-expand navbar-light navbar-primary">
			<div className="container-fluid">
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav my-2 mr-auto">
						{allPaths[0].map((path, index) => {
							const classes = getClasses(path, index, allPaths[0]);

							return (
								<li className={classes} key={path.path}>
									<Link to={path.path} {...path.attrs}>
										{path.image ? (
											<img src={path.image} alt={path.label} />
										) : (
											path.label
										)}
									</Link>
								</li>
							);
						})}
					</ul>

					<ul className="navbar-nav navbar-right">
						{allPaths[1].map((path, index) => {
							const classes = getClasses(path, index, allPaths[1]);

							return (
								<li className={classes} key={path.path}>
									<Link to={path.path} {...path.attrs}>
										{path.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
