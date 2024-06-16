import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { NotificationProvider } from './components/notification/NotificationContext.tsx'
import AuthStore from './store/Store.ts'

interface Store {
	store: AuthStore
}

const store = new AuthStore()

export const AuthContext = createContext<Store>({ store })

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthContext.Provider value={{ store }}>
				<NotificationProvider>
					<App />
				</NotificationProvider>
			</AuthContext.Provider>
		</BrowserRouter>
	</React.StrictMode>
)
