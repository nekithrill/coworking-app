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
					<img src='/infrastructure.webp' alt='IMG-01' />
					<div className='about__benefits_card_content'>
						<p className='card-number'>01</p>
						<h2>Modern amenities and infrastructure</h2>
						<p>
							Our coworking space is equipped with all necessary amenities,
							including high-speed Wi-Fi, printers, coffee stations, parking,
							and a kitchen. This allows residents to work comfortably and
							productively without leaving the building.
						</p>
					</div>
				</div>

				<div className='about__benefits_card'>
					<img src='/environment.webp' alt='IMG-02' />
					<div className='about__benefits_card_content'>
						<p className='card-number'>02</p>
						<h2>Inspiring and productive environment</h2>
						<p>
							Our coworking space is designed with modern interior trends in
							mind, promoting creativity and productivity. Bright and ergonomic
							work areas, cozy relaxation spots, and modern conference rooms
							create an atmosphere conducive to effective work and interaction.
						</p>
					</div>
				</div>

				<div className='about__benefits_card'>
					<img src='/flexibility.webp' alt='IMG-03' />
					<div className='about__benefits_card_content'>
						<p className='card-number'>03</p>
						<h2>Flexibility and accessibility</h2>
						<p>
							Our coworking space offers various rental options, from hourly to
							long-term, allowing residents to choose the most suitable option
							for their needs. This is especially convenient for freelancers,
							startups, and small teams who need flexibility in office space
							usage.
						</p>
					</div>
				</div>

				<div className='about__benefits_card'>
					<img src='/community.webp' alt='IMG-04' />
					<div className='about__benefits_card_content'>
						<p className='card-number'>04</p>
						<h2>Networking opportunities and community</h2>
						<p>
							Our coworking space actively fosters a professional community by
							organizing regular events, workshops, and networking meetings.
							This is a great opportunity for residents to establish new
							business contacts, share experiences, and find partners for joint
							projects.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutPage
