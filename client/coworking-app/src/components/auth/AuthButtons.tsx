import React from 'react'
import '../../styles/components/_authButtons.scss'

const AuthButtons: React.FC = () => {
	const openLogInTab = () => {}

	const openSignUpTab = () => {}
	return (
		<div className='auth_buttons'>
			<button className='auth_buttons__login' onClick={openLogInTab}>
				Log In
			</button>
			<button className='auth_buttons__signup' onClick={openSignUpTab}>
				Sign Up
			</button>
		</div>
	)
}

export default AuthButtons
