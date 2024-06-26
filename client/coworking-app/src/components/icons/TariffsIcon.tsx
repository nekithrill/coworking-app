import { useLocation } from 'react-router-dom'

const TariffsIcon = ({ color }: { color: any }) => {
	const location = useLocation()
	const isActive = location.pathname === '/tariffs'
	const iconColor = isActive ? 'var(--clr-menu-item-active)' : color

	return (
		<div className='icon'>
			<svg
				width='32px'
				height='32px'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					cx='12'
					cy='12'
					r='9'
					stroke={iconColor}
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14.5 9.08333L14.3563 8.96356C13.9968 8.66403 13.5438 8.5 13.0759 8.5H10.75C9.7835 8.5 9 9.2835 9 10.25V10.25C9 11.2165 9.7835 12 10.75 12H13.25C14.2165 12 15 12.7835 15 13.75V13.75C15 14.7165 14.2165 15.5 13.25 15.5H10.412C9.8913 15.5 9.39114 15.2969 9.01782 14.934L9 14.9167'
					stroke={iconColor}
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12 8L12 7'
					stroke={iconColor}
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12 17V16'
					stroke={iconColor}
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	)
}

export default TariffsIcon
