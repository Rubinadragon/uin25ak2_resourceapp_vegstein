import "../assets/styles/nav.scss"
import { Link } from "react-router";
import {resources} from '../assets/ressurser'

export default function Nav(){

    return(
        <nav>
            <ul id="tabs">
                {resources.map((resource, index) => <li key={index}>
                                                <Link to={"#"}>{resource.category}</Link>
                                            </li>)}
            </ul>
        </nav>
    )
}