import React from 'react'
import InstIcon from '../components/icons/InstIcon'
import LnkdinIcon from '../components/icons/LnkdinIcon'
import LocationIcon from '../components/icons/LocationIcon'
import MailIcon from '../components/icons/MailIcon'
import PhoneIcon from '../components/icons/PhoneIcon'
import TgIcon from '../components/icons/TgIcon'
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
						<div className='contacts__info-block-item'>
							<LocationIcon color='var(--clr-contacts-icon)' />
							<p>1234 Street Name, City, Country</p>
						</div>

						<div className='contacts__info-block-item'>
							<PhoneIcon color='var(--clr-contacts-icon)' />
							<p>+38 (099) 123 45 67</p>
						</div>

						<div className='contacts__info-block-item'>
							<MailIcon color='var(--clr-contacts-icon)' />
							<p>nativesync.confirmation@gmail.com</p>
						</div>
					</div>

					<div className='contacts__info-block'>
						<h2>Social media</h2>
						<div className='contacts__info-block-item'>
							<TgIcon color='var(--clr-contacts-icon)' />
							<p>@nativesync_coworking</p>
						</div>

						<div className='contacts__info-block-item'>
							<InstIcon color='var(--clr-contacts-icon)' />
							<p>@nativesync_coworking</p>
						</div>

						<div className='contacts__info-block-item'>
							<LnkdinIcon color='var(--clr-contacts-icon)' />
							<p>@nativesync_coworking</p>
						</div>
					</div>
				</div>

				<div className='contacts__form'>
					<h2>Contact Us</h2>
					<form>
						<div className='contacts__form_group'>
							<input
								type='email'
								id='email'
								name='email'
								autoComplete='off'
								required
							/>
							<label htmlFor='email'>Email</label>
						</div>
						<div className='contacts__form_group'>
							<input
								type='tel'
								id='phone'
								name='phone'
								pattern='[+]{0,1}[0-9]{1,15}'
								autoComplete='off'
								required
							/>
							<label htmlFor='phone'>Phone number</label>
						</div>
						<div className='contacts__form_group'>
							<textarea
								id='message'
								name='message'
								autoComplete='off'
								required
							></textarea>
							<label htmlFor='message'>Message</label>
						</div>
						<button type='submit'>Send</button>
					</form>
				</div>

				<div className='contacts__map'>
					<h2>Our Location</h2>
					<iframe
						title='Our Location'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796.4992891259982!2d35.18153507332958!3d47.818403874056955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc5e0a7b28cc41%3A0x701aee926c1313c8!2sZaporizhia%20National%20University!5e0!3m2!1sru!2sua!4v1718090445955!5m2!1sru!2sua'
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
