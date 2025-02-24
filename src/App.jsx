import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router'
import PageTitle from './components/PageTitle'
import {resources} from './assets/ressurser'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home resources={resources}/>}/>
      </Routes>
    </Layout>
  )
}

export default App
