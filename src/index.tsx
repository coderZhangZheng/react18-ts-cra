import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/reset.scss'
import './assets/styles/iconfont.scss'
import './assets/styles/common.scss'
import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router'
import router from './router'
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Suspense>
			<Provider store={store}>
				<RouterProvider router={router}></RouterProvider>
			</Provider>
		</Suspense>
	</React.StrictMode>
)

reportWebVitals()
