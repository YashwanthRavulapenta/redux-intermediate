import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { persistedStorage, store } from './Redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1>loding,...</h1>} persistor={persistedStorage}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
