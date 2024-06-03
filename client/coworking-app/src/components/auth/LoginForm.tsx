import React, { useState } from 'react'
import UserService from '../../services/UserService'
import '../../styles/components/_loginForm.scss'

type LoginFormProps = {
	onClose: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		try {
			setLoading(true)
			setError('')
			const response = await UserService.login(email, password)
			console.log('Login successful:', response.data)
			onClose()
		} catch (error: any) {
			setError(
				error.response?.data?.message || 'Login failed. Please try again.'
			)
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<form className='form-login' onSubmit={handleSubmit}>
			<label>
				Email:
				<input
					type='email'
					placeholder='Your email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
			</label>
			<label>
				Password:
				<input
					type='password'
					placeholder='******'
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
			</label>
			{error && <p className='error'>{error}</p>}
			<button type='submit' disabled={loading}>
				{loading ? 'Logging in...' : 'Login'}
			</button>
		</form>
	)
}

export default LoginForm
