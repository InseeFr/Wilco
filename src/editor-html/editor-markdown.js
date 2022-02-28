import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import './editor-html.scss';
import { getLang } from '../';

import * as HTMLUtils from './html-utils';

export const toolbar = {
	options: ['list', 'inline', 'link'],
	list: {
		inDropdown: false,
		className: undefined,
		options: ['unordered', 'ordered'],
	},
	inline: {
		options: ['bold', 'italic'],
	},
};

const EditorMarkdown = ({ text, handleChange, toolbar }) => {
	const [editorState, setEditorState] = useState(
		HTMLUtils.editorStateFromMd(text || '')
	);

	const handleChangeCallback = useCallback((editorState) => {
		setEditorState(editorState);
	}, []);

	const handleLeaveCallback = useCallback(() => {
		handleChange(HTMLUtils.mdFromEditorState(editorState));
	}, [editorState, handleChange]);

	return (
		<Editor
			editorState={editorState}
			toolbar={toolbar}
			toolbarClassName="home-toolbar"
			wrapperClassName="home-wrapper"
			editorClassName="home-editor"
			onEditorStateChange={handleChangeCallback}
			onBlur={handleLeaveCallback}
			localization={{
				locale: getLang(),
			}}
		/>
	);
};

EditorMarkdown.propTypes = {
	text: PropTypes.string,
	handleChange: PropTypes.func.isRequired,
	toolbar: PropTypes.object,
};

EditorMarkdown.defaultProps = {
	toolbar: toolbar,
};

export default EditorMarkdown;
