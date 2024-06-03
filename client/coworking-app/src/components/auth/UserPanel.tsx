import React, { useState } from 'react'
import { IUser } from '../../models/entities/IUser'
import '../../styles/components/_userPanel.scss'

type UserPanelProps = {
	user: IUser
	onLogout: () => void
}

const UserPanel: React.FC<UserPanelProps> = ({ user, onLogout }) => {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<div className='user-panel'>
			<div className='user-info' onClick={() => setIsExpanded(!isExpanded)}>
				<span>{user.email}</span>
				{isExpanded && (
					<div className='user-details'>
						<p>Email: {user.email}</p>
						<button onClick={onLogout}>Logout</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default UserPanel
