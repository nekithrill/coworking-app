import React from 'react'
import '../../styles/components/_authModal.scss'
import CloseIcon from '../icons/CloseIcon'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

type AuthModalProps = {
	isOpen: boolean
	onClose: () => void
	activeTab: 'login' | 'sign up'
}

const AuthModal: React.FC<AuthModalProps> = ({
	isOpen,
	onClose,
	activeTab
}) => {
	const [currentTab, setCurrentTab] = React.useState<'login' | 'sign up'>(
		activeTab
	)

	React.useEffect(() => {
		setCurrentTab(activeTab)
	}, [activeTab])

	if (!isOpen) return null

	return (
		<div className='auth-modal-overlay' onClick={onClose}>
			<div className='auth__modal' onClick={e => e.stopPropagation()}>
				<div className='auth__modal_tabs'>
					<button
						className={`auth__modal_tab ${
							currentTab === 'login' ? 'active' : ''
						}`}
						onClick={() => setCurrentTab('login')}
					>
						Login
					</button>

					<button
						className={`auth__modal_tab ${
							currentTab === 'sign up' ? 'active' : ''
						}`}
						onClick={() => setCurrentTab('sign up')}
					>
						Sign Up
					</button>

					<button className='auth__modal-close' onClick={onClose}>
						<CloseIcon color='var(--clr-auth-modal-icon)' />
					</button>
				</div>
				<div className='auth__modal_form'>
					{currentTab === 'login' && <LoginForm onClose={onClose} />}
					{currentTab === 'sign up' && <RegisterForm onClose={onClose} />}
				</div>
			</div>
		</div>
	)
}

export default AuthModal
