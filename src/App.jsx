//import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Navigate, Route, Routes, /*useParams*/ } from 'react-router'
import {resources} from './assets/ressurser'
import ResourcePage from './components/ResourcePage'
import { useState } from 'react'

function App() {
  //https://stackoverflow.com/questions/67447674/react-usestate-and-tab-behaviour-issue
  const [tab, setTab] = useState(0)

  const filterResources = resources.filter((resource) => resource.category === tab)

  return (
    <Layout>
      <Routes>
        {/*Linjen under fra siste forslag på første kommentar fra denne siden:https://stackoverflow.com/questions/70437952/is-there-a-way-to-set-a-default-route-with-react-router-v6*/}
        {/*Hadde klart å misforstå et av punktene i oppgaven, fikk hjelp av Hanna til å se det*/}
        <Route path="*" element={<Navigate to="html" replace/>}/>
        <Route path="/html" element={<ResourcePage resources={resources} category={"html"} /*title={resources.title}*/ /*url={resources.url}*//>}/>
        <Route path="/css" element={<ResourcePage resources={resources} category={"css"} /*title={resources.title}*/ /*url={resources.url}*//>}/>
        <Route path="/javascript" element={<ResourcePage resources={resources} category={"javascript"} /*title={resources.title}*/ /*url={resources.url}*//>}/>
        <Route path="/react" element={<ResourcePage resources={resources} category={"react"} /*title={resources.title}*/ /*url={resources.url}*//>}/>
        <Route path="/headless-cms" element={<ResourcePage resources={resources} category={"headless-cms"} /*title={resources.title}*/ /*url={resources.url}*//>}/>
      </Routes>
    </Layout>
  )
}

export default App
