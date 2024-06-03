import React, { useState } from 'react'
import UserService from '../../services/UserService'
import '../../styles/components/_registerForm.scss'

type RegisterFormProps = {
	onClose: () => void
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onClose }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		if (password !== confirmPassword) {
			setError('Passwords do not match')
			return
		}

		try {
			setLoading(true)
			setError('')
			const response = await UserService.register(email, password)
			console.log('Registration successful:', response.data)
			onClose()
		} catch (error: any) {
			setError(
				error.response?.data?.message ||
					'Registration failed. Please try again.'
			)
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<form className='form-register' onSubmit={handleSubmit}>
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
					placeholder='*****'
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
			</label>
			<label>
				Confirm Password:
				<input
					type='password'
					placeholder='*****'
					value={confirmPassword}
					onChange={e => setConfirmPassword(e.target.value)}
					required
				/>
			</label>
			{error && <p className='error'>{error}</p>}
			<button type='submit' disabled={loading}>
				{loading ? 'Signing up...' : 'Sign Up'}
			</button>
		</form>
	)
}

export default RegisterForm
