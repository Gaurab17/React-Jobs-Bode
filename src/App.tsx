import { useContext, useState } from 'react'
import './App.css'
import Landingpage from './Components/Landingpage'
// import { userContext } from './main'

function App() {
  // const [count, setCount] = useState(0)
  // const user = useContext(userContext)

  return (
    <div className=' h-screen bg-gradient-to-r from-[#345267] to-[#3F8F8B]'>
      <Landingpage />
    </div>
  )
}

export default App
