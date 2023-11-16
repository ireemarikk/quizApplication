import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Introduce from './pages/introduce/introduce'
import Quiz from './pages/quiz/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Introduce/>}/>
          <Route path='/quiz/:difficulty/:amount' element={<Quiz/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
