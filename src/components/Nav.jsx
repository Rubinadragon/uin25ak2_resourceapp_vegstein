import "../assets/styles/nav.scss"
import { Link } from "react-router";
import {resources} from '../assets/ressurser'
import Resources from "./resources";

export default function Nav(){

    return(
        <nav>
            <ul id="tabs">
                <li>
                    <Link to={"/html"}>HTML</Link>
                    <Link to={"/css"}>CSS</Link>
                    <Link to={"/javascript"}>JavaScript</Link>
                    <Link to={"/react"}>React</Link>
                    <Link to={"/headless-cms"}>Headless CMS</Link>
                </li>
            </ul>
        </nav>
    )
}