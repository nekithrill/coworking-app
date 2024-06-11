import React from 'react'
import '../styles/layout/_notFoundPage.scss'

const NotFoundPage: React.FC = () => {
	return (
		<div className='error_page'>
			<h1>
				Error 404 <span>Page not found</span>
			</h1>
		</div>
	)
}

export default NotFoundPage
