import { useParams } from 'react-router'
import PageTitle from './PageTitle'
import "../assets/styles/resourcePage.scss"

export default function Resources({resources}){
    return(
        /*Opprinnelig lå filterResources fra ResourcePage her, og ble også mappet direkte inn her. 
        Studentassistent foreslo å legge den høyere opp i komponenttreet for å slippe å skrive det inn flere ganger.*/
        <ul>
            {resources?.map((resource, index) => {
                //Studentassistent foreslo å legge en ekstra return inni her for at teksten skal rendres.
                return(
                    <li key={index}>
                            <a href={resource?.url}>{resource?.title}</a>
                    </li>)
                })}
        </ul>
    )
}