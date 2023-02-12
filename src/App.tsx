import { useContext, useState } from 'react'
import './App.css'
import LandingPage from './screens/Logo-preview'
// import { BrowserRouter as Router } from 'react-router-dom'

// import { userContext } from './main'

function App() {
  // const [count, setCount] = useState(0)
  // const user = useContext(userContext)
  

  return (
    <div className=' h-screen bg-gradient-to-r from-[#345267] to-[#3F8F8B]'>
      <LandingPage />
    </div>
  )
}

export default App
