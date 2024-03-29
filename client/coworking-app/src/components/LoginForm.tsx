import { FC, useState } from 'react'

const LoginForm: FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	return (
		<div>
			<input
				onChange={e => setEmail(e.target.value)}
				value={email}
				type='text'
				placeholder='Email'
			></input>
			<input
				onChange={e => setPassword(e.target.value)}
				value={password}
				type='password'
				placeholder='Password'
			></input>
			<button>Login</button>
		</div>
	)
}

export default LoginForm
