import { useEffect, useState } from 'react'
import '../styles/components/_settingsModal.scss'
import CloseIcon from './icons/CloseIcon'
import LanguageIcon from './icons/LanguageIcon'
import ThemeIcon from './icons/ThemeIcon'

type SettingsModalProps = {
	isOpen: boolean
	onClose: () => void
	onSave: () => void
}

const SettingsModal = ({ isOpen, onClose, onSave }: SettingsModalProps) => {
	const [selectedTheme, setSelectedTheme] = useState(() => {
		const storedTheme = localStorage.getItem('theme')
		return storedTheme ? storedTheme : 'light'
	})

	const [selectedLanguage, setSelectedLanguage] = useState(() => {
		const storedLanguage = localStorage.getItem('language')
		return storedLanguage ? storedLanguage : 'en'
	})

	useEffect(() => {
		document.body.classList.add(selectedTheme + '-theme')
		return () => {
			document.body.classList.remove(selectedTheme + '-theme')
		}
	}, [selectedTheme])

	const handleChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const theme = e.target.value
		setSelectedTheme(theme)
		localStorage.setItem('theme', theme)
	}

	const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const language = e.target.value
		setSelectedLanguage(language)
		localStorage.setItem('language', language)
	}

	const handleSaveSettings = () => {
		localStorage.setItem('theme', selectedTheme)
		localStorage.setItem('language', selectedLanguage)
		onSave()
	}

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<div
			className={`settings-modal-overlay ${
				isOpen ? 'modal-open' : 'modal-closed'
			}`}
			onClick={handleOverlayClick}
		>
			<div className='settings-modal'>
				<div className='settings-modal__content'>
					<div className='settings-modal__content_header'>
						<h2>Settings</h2>
						<button id='close-button' onClick={onClose}>
							<CloseIcon color='var(--clr-settings-modal-icon)' />
						</button>
					</div>

					<p>Here you can choose your preferred language and theme.</p>

					<div className='settings-modal__content_theme'>
						<label htmlFor='themeSelect'>Select theme:</label>
						<ThemeIcon color='var(--clr-modal-icon)' />
						<select
							id='themeSelect'
							value={selectedTheme}
							onChange={handleChangeTheme}
						>
							<option value='light'>Light</option>
							<option value='dark'>Dark</option>
						</select>
					</div>

					<div className='settings-modal__content_language'>
						<label htmlFor='languageSelect'>Select language:</label>
						<LanguageIcon color='var(--clr-modal-icon)' />
						<select
							id='languageSelect'
							value={selectedLanguage}
							onChange={handleChangeLanguage}
						>
							<option value='en'>English</option>
							<option value='ua'>Українська</option>
							<option value='ru'>Русский</option>
						</select>
					</div>

					<button id='save-button' onClick={handleSaveSettings}>
						Save settings
					</button>
				</div>
			</div>
		</div>
	)
}

export default SettingsModal
