import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../main'
import UserService from '../../services/UserService'
import '../../styles/components/_loginForm.scss'

type LoginFormProps = {
	onClose: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
	const { store } = useContext(AuthContext)
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
			<button
				type='submit'
				disabled={loading}
				onClick={() => store.login(email, password)}
			>
				{loading ? 'Logging in...' : 'Login'}
			</button>
		</form>
	)
}

export default observer(LoginForm)
