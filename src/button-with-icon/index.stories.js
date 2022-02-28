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
import { MemoryRouter } from 'react-router-dom';

storiesOf('Button With Icons', module)
	.addDecorator(function (getStory) {
		return (
			<MemoryRouter>
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
			</MemoryRouter>
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
					className="bi bi-x"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
					/>
					<path
						fillRule="evenodd"
						d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
					/>
				</svg>
			}
			action="#"
		/>
	))
	.add('ExportButton', () => <ExportButton action="#" />)
	.add('PublishButton', () => <PublishButton action="#" />)
	.add('NewButton', () => <NewButton action="#" />)
	.add('CancelButton', () => <CancelButton action="#" />)
	.add('SaveButton', () => <SaveButton action="#" />)
	.add('ResetButton', () => <ResetButton action="#" />)
	.add('DuplicateButton', () => <DuplicateButton action="#" />)
	.add('DeleteButton', () => <DeleteButton action="#" />)
	.add('ReturnButton', () => <ReturnButton action="#" />)
	.add('ImportButton', () => <ImportButton action="#" />);
