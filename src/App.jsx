import { useState } from 'react'
import './App.css'
import FirstComponent from './Componentes/FirstComponent.jsx'
import FirstComponent2 from './Componentes/FirstComponent2.jsx'
import MainComponent from './Componentes/MainComponent.jsx'
import TemplateExpression from './Componentes/TemplateExpression.jsx'
import Events from './Componentes/Events.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <FirstComponent />
      <FirstComponent2 />
      <MainComponent />
      <TemplateExpression />
      < Events />
    </div>
  )
}

export default App
