import React from 'react';
import { storiesOf } from '@storybook/react';
import { I18NContext } from '../context';
import AbstractButton, {
	ExportButton,
	PublishButton,
	NewButton,
	CancelButton,
	SaveButton,
	DuplicateButton,
	ResetButton,
	DeleteButton,
	ReturnButton,
	ImportButton,
} from './';

storiesOf('Button With Icons', module)
	.addDecorator(function (getStory) {
		return (
			<I18NContext.Provider
				value={{
					btnExport: 'Export',
					btnValid: 'Publish',
					btnNewMale: 'New',
					btnCancel: 'Cancel',
					btnSave: 'Save',
					btnDuplicate: 'Duplicate',
				}}
			>
				{getStory()}
			</I18NContext.Provider>
		);
	})
	.add('AbstractButton', () => (
		<AbstractButton
			label="Button"
			icon={
				<svg
					width="1em"
					height="1em"
					viewBox="0 0 16 16"
					class="bi bi-x"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
					/>
					<path
						fill-rule="evenodd"
						d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
					/>
				</svg>
			}
		/>
	))
	.add('ExportButton', () => <ExportButton />)
	.add('PublishButton', () => <PublishButton />)
	.add('NewButton', () => <NewButton />)
	.add('CancelButton', () => <CancelButton />)
	.add('SaveButton', () => <SaveButton />)
	.add('ResetButton', () => <ResetButton />)
	.add('DuplicateButton', () => <DuplicateButton />)
	.add('DeleteButton', () => <DeleteButton />)
	.add('ReturnButton', () => <ReturnButton />)
	.add('ImportButton', () => <ImportButton />);
