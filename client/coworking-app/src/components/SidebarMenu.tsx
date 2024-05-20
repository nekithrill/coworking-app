import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/_sidebarMenu.scss'
import SettingsModal from './SettingsModal'
import AboutIcon from './icons/AboutIcon'
import ContactsIcon from './icons/ContactsIcon'
import GreenLogo from './icons/GreenLogo'
import HomeIcon from './icons/HomeIcon'
import LocationsIcon from './icons/LocationsIcon'
import NewsIcon from './icons/NewsIcon'
import SettingsIcon from './icons/SettingsIcon'
import TariffsIcon from './icons/TariffsIcon'

const SidebarMenu = () => {
	const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)

	const handleCloseSettingsModal = () => {
		setIsSettingsModalOpen(false)
	}

	const handleSaveSettings = () => {
		setIsSettingsModalOpen(false)
	}

	return (
		<div className='sidebar'>
			<div className='sidebar__logo'>
				<GreenLogo color='var(--clr-logo)' />
				{/* <Logo /> */}
				<p className='first-word'>
					Native<span className='second-word'>Sync</span>
				</p>
			</div>

			<button
				className='sidebar__button'
				onClick={() => setIsSettingsModalOpen(true)}
			>
				<SettingsIcon color='var(--clr-settings-button-icon)' />
			</button>

			<SettingsModal
				isOpen={isSettingsModalOpen}
				onClose={handleCloseSettingsModal}
				onSave={handleSaveSettings}
			/>

			<nav className='sidebar__menu'>
				<ul>
					<li>
						<NavLink to='/'>
							<HomeIcon color='var(--clr-menu-item)' />
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/news'>
							<NewsIcon color='var(--clr-menu-item)' />
							News / Ads
						</NavLink>
					</li>
					<li>
						<NavLink to='/locations'>
							<LocationsIcon color='var(--clr-menu-item)' />
							Locations
						</NavLink>
					</li>
					<li>
						<NavLink to='/tariffs'>
							<TariffsIcon color='var(--clr-menu-item)' />
							Tariffs
						</NavLink>
					</li>
					<li>
						<NavLink to='/about'>
							<AboutIcon color='var(--clr-menu-item)' />
							About
						</NavLink>
					</li>
					<li>
						<NavLink to='/contacts'>
							<ContactsIcon color='var(--clr-menu-item)' />
							Contacts
						</NavLink>
					</li>
				</ul>
			</nav>

			<footer className='sidebar__footer'>
				<div className='sidebar__footer_copyright'>
					<p>
						<span className='copyright'>&copy;</span>2024 Nekithrill.
					</p>
					<p>All Rights Reserved.</p>
				</div>
				<div className='sidebar__footer_policy'>
					<a href='#'>terms</a>
					<a href='#'>privacy</a>
					<a href='#'>policy</a>
				</div>
			</footer>
		</div>
	)
}

export default SidebarMenu
