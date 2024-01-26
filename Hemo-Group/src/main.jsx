import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes/Routes'
import './index.css'
import HubspotChat from './Components/HubspotChat/HubSpotChat'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HubspotChat />
    <Routes/>
  </React.StrictMode>,
)
