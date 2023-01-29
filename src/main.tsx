import React, { createContext } from 'react'
// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// export const userContext = createContext<{ username: string | number; address: string }>({
//   username: '',
//   address: '',
// })
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
