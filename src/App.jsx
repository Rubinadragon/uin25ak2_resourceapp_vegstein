import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes, useParams } from 'react-router'
import {resources} from './assets/ressurser'
import Resources from './components/resources'
import ResourcePage from './components/ResourcePage'

function App() {
  //const [resources, setResources] = useState()
  //const {slug} = useParams

  return (
    <Layout>
      <Routes>
        <Route path="/:slug" element={<ResourcePage resources={resources} category={resources.category} title={resources.title} url={resources.url}/>}/>
      </Routes>
    </Layout>
  )
}

export default App
