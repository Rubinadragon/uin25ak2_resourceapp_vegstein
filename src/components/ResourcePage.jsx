import "../assets/styles/resourcePage.scss"

import PageTitle from "./PageTitle";
import Resources from "./resources";


export default function ResourcePage({resources}){
    
    return(
        <main>
            <PageTitle/>
            <Resources resources={resources} category={resources.category} title={resources.title} url={resources.url}/>
        </main>
    )
}