import React from 'react'
import '../styles/layout/_aboutPage.scss'

const AboutPage: React.FC = () => {
	return (
		<div className='about'>
			<div className='about__header'>
				<h1>About</h1>
				<p>On this page you can find all benefits of this project.</p>
			</div>

			<div className='about__benefits'>
				<div className='about__benefits_card'>
					<img src='/placeholder.jpg' alt='IMG' />
					<div className='about__benefits_card_content'>
						<p className='card-number'>01</p>
						<h2>First benefit</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
							id iste quisquam libero veritatis praesentium numquam repellat
							corporis dicta voluptatem illum, eius quaerat unde esse veniam
							sequi aut iure fugit labore excepturi deserunt.
						</p>
					</div>
				</div>

				<div className='about__benefits_card'>
					<img src='/placeholder.jpg' alt='IMG' />
					<div className='about__benefits_card_content'>
						<p className='card-number'>02</p>
						<h2>Second benefit</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
							id iste quisquam libero veritatis praesentium numquam repellat
							corporis dicta voluptatem illum, eius quaerat unde esse veniam
							sequi aut iure fugit labore excepturi deserunt.
						</p>
					</div>
				</div>

				<div className='about__benefits_card'>
					<img src='/placeholder.jpg' alt='IMG' />
					<div className='about__benefits_card_content'>
						<p className='card-number'>03</p>
						<h2>Third benefit</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
							id iste quisquam libero veritatis praesentium numquam repellat
							corporis dicta voluptatem illum, eius quaerat unde esse veniam
							sequi aut iure fugit labore excepturi deserunt.
						</p>
					</div>
				</div>

				<div className='about__benefits_card'>
					<img src='/placeholder.jpg' alt='IMG' />
					<div className='about__benefits_card_content'>
						<p className='card-number'>04</p>
						<h2>Fourth benefit</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
							id iste quisquam libero veritatis praesentium numquam repellat
							corporis dicta voluptatem illum, eius quaerat unde esse veniam
							sequi aut iure fugit labore excepturi deserunt.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutPage
