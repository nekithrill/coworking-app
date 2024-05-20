import { useLocation } from 'react-router-dom'

const NewsIcon = ({ color }: { color: any }) => {
	const location = useLocation()
	const isActive = location.pathname === '/news'
	const iconColor = isActive ? 'var(--clr-menu-item-active)' : color

	return (
		<div className='icon'>
			<svg
				fill={iconColor}
				width='20px'
				height='20px'
				viewBox='0 -0.2 50.963 50.963'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					id='announcement'
					d='M997.7,276.689c4.562,1.118,11.424,3.839,19.778,10.381v-36.3c-8.354,6.54-15.216,9.262-19.778,10.381ZM990.676,293l-.057-.067-.068-.111c-.633-1.078-1.445-3.321-1.715-7.894l0-.026V279.7h-4.608l-2.611,0v16.36h7.32c.023,0,.049-.007.077-.008l.09-.01.13.008c.03,0,.057.005.079.009a1.869,1.869,0,0,0,1.822-1.862,1.833,1.833,0,0,0-.25-.906A1.891,1.891,0,0,0,990.676,293Zm-17.6-28.3v8.448a4.244,4.244,0,0,0,4.231,4.227h18.065v-16.9H977.309A4.242,4.242,0,0,0,973.078,264.7Zm49.969-19.193H1020.8a1.011,1.011,0,0,0-.995.995v44.844a1,1,0,0,0,.995.991h2.245a.994.994,0,0,0,.992-.993V246.495A1,1,0,0,0,1023.047,245.5Z'
					transform='translate(-973.078 -245.502)'
				/>
			</svg>
		</div>
	)
}

export default NewsIcon