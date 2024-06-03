import React, { useState } from 'react'
import '../../styles/components/_authButtons.scss'
import AuthModal from './AuthModal'

const AuthButtons: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [activeTab, setActiveTab] = useState<'login' | 'sign up'>('login')

	const openLoginModal = () => {
		setActiveTab('login')
		setIsOpen(true)
	}

	const openRegisterModal = () => {
		setActiveTab('sign up')
		setIsOpen(true)
	}

	const closeModal = () => setIsOpen(false)

	return (
		<div className='auth_buttons'>
			<button className='auth_buttons__login' onClick={openLoginModal}>
				Login
			</button>
			<button className='auth_buttons__signup' onClick={openRegisterModal}>
				Sign Up
			</button>

			<AuthModal isOpen={isOpen} onClose={closeModal} activeTab={activeTab} />
		</div>
	)
}

export default AuthButtons
