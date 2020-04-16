import React from 'react';
import D from '../build-dictionary';
import { Link } from 'react-router-dom';

import './menu.scss';

const WITH_SEPARATOR_CLASS = 'with-separator';

function getClasses(path, index, paths) {
	return [path.className, !paths[index + 1] ? '' : WITH_SEPARATOR_CLASS]
		.join(' ')
		.trim();
}
export default ({ paths }) => {
	const orderedPaths = paths
		.filter(path => path.shouldBeDisplayed !== false)
		.sort((p1, p2) => p1.order - p2.order);
	const allPaths = [{ label: D.home, path: '/' }, ...orderedPaths].reduce(
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
		<nav className="navbar navbar-default navbar-primary">
			<div className="container-fluid">
				<div
					className="collapse navbar-collapse"
					id="bs-example-navbar-collapse-1"
				>
					<ul className="nav navbar-nav">
						{allPaths[0].map((path, index) => {
							const classes = getClasses(path, index, allPaths[0]);

							return (
								<li className={classes} key={path.path}>
									<Link to={path.path} {...path.attrs}>
										{path.label}
									</Link>
								</li>
							);
						})}
					</ul>

					<ul className="nav navbar-nav navbar-right">
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
