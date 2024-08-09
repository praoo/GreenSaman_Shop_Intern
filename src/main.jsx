import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Importing the Bootstrap 5 CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopContextProvider from './Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ShopContextProvider>,
)
