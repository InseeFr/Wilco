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
