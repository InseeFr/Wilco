import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '.';

storiesOf('Modal', module)
	.add('default', () => {
		const id = "id";
		const isOpen = true;
		const title = "This is the title";
		const body = "This is the body";
		const footer = "This is the footer";
		const closeCancel = () => alert("close");
		const modalButtons = [
			{ label: "Validate", disabled: true, action: () => alert("validate")},
			{ label: "Cancel", disabled: false, action: () => alert("Cancel")}
		]
		return <Modal id={id} isOpen={isOpen} title={title} body={body} footer={footer} closeCancel={closeCancel} modalButtons={modalButtons}/>
	})
