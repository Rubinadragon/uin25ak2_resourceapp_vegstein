import './App.css'
import Layout from './components/Layout'
import { Navigate, Route, Routes } from 'react-router'
import {resources} from './assets/ressurser'
import ResourcePage from './components/ResourcePage'

function App() {
  return (
    <Layout>
      <Routes>
        {/*Linjen under fra siste forslag på første kommentar fra denne siden:https://stackoverflow.com/questions/70437952/is-there-a-way-to-set-a-default-route-with-react-router-v6*/}
        {/*Hadde klart å misforstå et av punktene i oppgaven, fikk hjelp av Hanna til å se det. Jeg filtrerte opprinnelig etter slug.*/}
        <Route path="*" element={<Navigate to="html" replace/>}/>
        <Route path="/html" element={<ResourcePage resources={resources} category={"html"}/>}/>
        <Route path="/css" element={<ResourcePage resources={resources} category={"css"}/>}/>
        <Route path="/javascript" element={<ResourcePage resources={resources} category={"javascript"}/>}/>
        <Route path="/react" element={<ResourcePage resources={resources} category={"react"}/>}/>
        <Route path="/headless-cms" element={<ResourcePage resources={resources} category={"headless-cms"}/>}/>
      </Routes>
    </Layout>
  )
}

export default App
