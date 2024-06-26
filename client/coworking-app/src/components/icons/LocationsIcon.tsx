import { useLocation } from 'react-router-dom'

const LocationsIcon = ({ color }: { color: any }) => {
	const location = useLocation()
	const isActive = location.pathname === '/locations'
	const iconColor = isActive ? 'var(--clr-menu-item-active)' : color

	return (
		<div className='icon'>
			<svg
				fill={iconColor}
				width='28px'
				height='28px'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M22,7H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V7H2A1,1,0,0,0,1,8V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V8A1,1,0,0,0,22,7ZM3,9H7V21H3ZM9,8V3h6V21H13V19a1,1,0,0,0-2,0v2H9ZM21,21H17V9h4ZM13,7H11V5h2Zm0,4H11V9h2Zm0,4H11V13h2ZM4,10H6v2H4Zm0,4H6v2H4Zm0,4H6v2H4Zm16-6H18V10h2Zm0,4H18V14h2Zm0,4H18V18h2Z' />
			</svg>
		</div>
	)
}

export default LocationsIcon
