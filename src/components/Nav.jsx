//https://salehmubashar.com/blog/how-to-create-active-links-using-react-router-v6
import "../assets/styles/nav.scss"
import { Link, NavLink, useParams } from "react-router";
import {resources} from '../assets/ressurser'
import Resources from "./resources";
import { useState } from "react";

export default function Nav(){
    //const filterResources = resources.filter((resource) => resource.category === slug)
    const {slug} = useParams()
    //const [active, setActive] = useState(() => activeTab())
    const [active, setActive] = useState(false)

    /*function activeTab(){
        resources.category === slug ? true : false
    }*/
   //console.log(active)

   //Studentassistent foreslo å bytte ut Link med NavLink for da fungerte active-klassen på scss uten ekstra kode.
    return(
        <nav>
            <ul id="tabs">
                <li>
                    <NavLink to={"/html"}>HTML</NavLink>
                </li>
                <li>
                    <NavLink to={"/css"}>CSS</NavLink>
                </li>
                <li>
                    <NavLink to={"/javascript"}>JavaScript</NavLink>
                </li>
                <li>
                    <NavLink to={"/react"}>React</NavLink>
                </li>
                <li>
                    <NavLink to={"/headless-cms"}>Headless CMS</NavLink>
                </li>
            </ul>
        </nav>
    )
}