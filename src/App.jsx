//import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Navigate, Route, Routes, /*useParams*/ } from 'react-router'
import {resources} from './assets/ressurser'
import ResourcePage from './components/ResourcePage'

function App() {


  return (
    <Layout>
      <Routes>
        {/*Linjen under fra siste forslag på første kommentar fra denne siden:https://stackoverflow.com/questions/70437952/is-there-a-way-to-set-a-default-route-with-react-router-v6*/}
        <Route path="*" element={<Navigate to="html" replace/>}/>
        <Route path="/:slug" element={<ResourcePage resources={resources} /*category={resources.category}*/ /*title={resources.title}*/ /*url={resources.url}*//>}/>
      </Routes>
    </Layout>
  )
}

export default App
