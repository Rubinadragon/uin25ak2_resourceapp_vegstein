import "../assets/styles/nav.scss"
import { NavLink, useParams } from "react-router";

export default function Nav({}){
    const {slug} = useParams()
    
   //Studentassistent foreslo å bytte ut Link med NavLink for da fungerte active-klassen på scss uten ekstra kode.
    return(
        <nav>
            <ul id="tabs">{/*Under er et forsøk på å dynamisk generere tabs, men jeg har ikke klart å finne en metode å filtrere ut.*/}
                {/*resources.map((resource, index) => 
                    {return (<li key={index}>
                        <NavLink to={`/${slug}`}>{resource.category}</NavLink>
                </li>)})*/}
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