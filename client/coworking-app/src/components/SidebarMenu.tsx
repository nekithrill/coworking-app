import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/_sidebarMenu.scss'
import SettingsModal from './SettingsModal'
import AboutIcon from './icons/AboutIcon'
import ContactsIcon from './icons/ContactsIcon'
import HomeIcon from './icons/HomeIcon'
import LocationsIcon from './icons/LocationsIcon'
import Logo from './icons/Logo'
import NewsIcon from './icons/NewsIcon'
import SettingsIcon from './icons/SettingsIcon'
import TariffsIcon from './icons/TariffsIcon'

const SidebarMenu = () => {
	const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleCloseSettingsModal = () => {
		setIsSettingsModalOpen(false)
	}

	const handleSaveSettings = () => {
		setIsSettingsModalOpen(false)
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<>
			<button className='burger-menu-button' onClick={toggleMenu}>
				☰
			</button>

			{isMenuOpen && (
				<div className='sidebar-overlay' onClick={closeMenu}></div>
			)}

			<div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
				<div className='sidebar__logo'>
					<Logo color='var(--clr-logo)' />
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
							<NavLink to='/' onClick={closeMenu}>
								<HomeIcon color='var(--clr-menu-item)' />
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='/news' onClick={closeMenu}>
								<NewsIcon color='var(--clr-menu-item)' />
								News / Ads
							</NavLink>
						</li>
						<li>
							<NavLink to='/locations' onClick={closeMenu}>
								<LocationsIcon color='var(--clr-menu-item)' />
								Locations
							</NavLink>
						</li>
						<li>
							<NavLink to='/tariffs' onClick={closeMenu}>
								<TariffsIcon color='var(--clr-menu-item)' />
								Tariffs
							</NavLink>
						</li>
						<li>
							<NavLink to='/about' onClick={closeMenu}>
								<AboutIcon color='var(--clr-menu-item)' />
								About
							</NavLink>
						</li>
						<li>
							<NavLink to='/contacts' onClick={closeMenu}>
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
		</>
	)
}

export default SidebarMenu
