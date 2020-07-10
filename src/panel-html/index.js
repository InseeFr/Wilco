import React from 'react';
import DOMPurify from 'dompurify';
import Panel from '../panel';

function PanelHtml({ title, children }) {
	return (
		<Panel title={title}>
			<div
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(children),
				}}
			/>
		</Panel>
	);
}

export default PanelHtml;
