import React from 'react'
import '../styles/layout/_contactsPage.scss'

const ContactsPage: React.FC = () => {
	return (
		<div className='contacts'>
			<div className='contacts__header'>
				<h1>Contacts</h1>
				<p>
					If you have any questions or issues, on this page you can find all the
					contact information for the service.
				</p>
			</div>

			<div className='contacts__content'>
				<div className='contacts__info'>
					<div className='contacts__info-block'>
						<h2>Contact Information</h2>
						<p>ADDR: 1234 Street Name, City, Country</p>
						<p>PHONE: +123 456 7890</p>
						<p>MAIL: nativesync.confirmation@gmail.com</p>
					</div>

					<div className='contacts__info-block'>
						<h2>Social media</h2>
						<p>TG: @exampleuser</p>
						<p>INST: @exampleuser</p>
						<p>LNKDIN: @exampleuser</p>
						<p></p>
					</div>
				</div>

				<div className='contacts__form'>
					<h2>Contact Us</h2>
					<form>
						<div className='contacts__form_group'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								id='email'
								name='email'
								placeholder='Your email'
								required
							/>
						</div>
						<div className='contacts__form_group'>
							<label htmlFor='phone'>Phone</label>
							<input
								type='tel'
								id='phone'
								name='phone'
								pattern='[+]{0,1}[0-9]{1,15}'
								placeholder='+1234567890'
								required
							/>
						</div>
						<div className='contacts__form_group'>
							<label htmlFor='message'>Message</label>
							<textarea
								id='message'
								name='message'
								placeholder='Write your message here'
								required
							></textarea>
						</div>
						<button type='submit'>Send</button>
					</form>
				</div>

				<div className='contacts__map'>
					<h2>Our Location</h2>
					<iframe
						title='Our Location'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.247940081172!2d144.9537363157776!3d-37.81627984209313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57778f5d0b4e9f!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1625572326320!5m2!1sen!2sau'
						width='100%'
						height='400'
						style={{ border: 0 }}
						allowFullScreen={false}
						loading='lazy'
					></iframe>
				</div>
			</div>
		</div>
	)
}

export default ContactsPage
