const CloseIcon = ({ color }: { color: any }) => {
	return (
		<div className='icon'>
			<svg
				width='32px'
				height='32px'
				viewBox='0 0 1024 1024'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill={color}
					d='M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z'
				/>
			</svg>
		</div>
	)
}

export default CloseIcon
