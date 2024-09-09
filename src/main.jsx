import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import InputBox from './components/InputBox.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <InputBox />
    
  </React.StrictMode>,
)