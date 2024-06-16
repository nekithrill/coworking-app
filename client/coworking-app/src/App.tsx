import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import SidebarMenu from './components/SidebarMenu'
import AuthButtons from './components/auth/AuthButtons'
import UserPanel from './components/auth/UserPanel'
import { AuthContext } from './main'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactsPage'
import HomePage from './pages/HomePage'
import LocationsPage from './pages/LocationsPage'
import NewsPage from './pages/NewsPage'
import NotFoundPage from './pages/NotFoundPage'
import TariffsPage from './pages/TariffsPage'
import './styles/abstracts/_index.scss'
import './styles/base/_index.scss'

const App: React.FC = () => {
	const { store } = useContext(AuthContext)

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth()
		}
	}, [store])

	return (
		<div className='App'>
			{store.isAuth ? <UserPanel /> : <AuthButtons />}
			<SidebarMenu />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/news' element={<NewsPage />} />
				<Route path='/locations' element={<LocationsPage />} />
				<Route path='/tariffs' element={<TariffsPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contacts' element={<ContactPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	)
}

export default observer(App)
