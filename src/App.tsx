import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { userContext } from './main'

function App() {
  const [count, setCount] = useState(0)
  const user = useContext(userContext)

  return (
    <div className=' bg-slate-500'>
      <p className='text-3xl font-bold underline'>Hello world</p>
      <button>
        Hello there: {user.username} from {user.address}
      </button>
    </div>
  )
}

export default App
