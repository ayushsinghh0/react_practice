import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { RevnueCard } from './components/Revenuecard'

function App() {
  const [count, setCount] = useState(0)
  function ok(){
    window.location="https://www.google.com/"
  }
  return (
    <div className='grid grid-cols-4'>
      <button onClick={ok}>okk</button>
    <RevnueCard title={"amount pending"} amount={"1000"} orderCount={2}/>
    </div>
  )
}

/*  */


export default App
