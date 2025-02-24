import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router'
import {resources} from './assets/ressurser'
import Home from './components/Home'
import Resources from './components/Resources'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home resources={resources}/>}/>
        <Route path="/Resources" element={<Resources /*category={category}*//>}/>
      </Routes>
    </Layout>
  )
}

export default App
