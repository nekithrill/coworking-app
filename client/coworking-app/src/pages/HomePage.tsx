import React from 'react'
import '../styles/layout/_homePage.scss'

const HomePage: React.FC = () => {
	return (
		<div className='home'>
			<div className='home__hero'>
				<h1>Home title</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sint
					omnis. Veniam, mollitia amet animi necessitatibus suscipit ipsum
					architecto, qui magnam ad laudantium nesciunt officiis.
				</p>
			</div>

			<button className='bookingButton'>make booking</button>
		</div>
	)
}

export default HomePage
