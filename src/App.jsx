import { useState } from 'react'
import './App.css'
import FirstComponent from './Componentes/FirstComponent.jsx'
import FirstComponent2 from './Componentes/FirstComponent2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <FirstComponent />
      <FirstComponent2 />
    </div>
  )
}

export default App
