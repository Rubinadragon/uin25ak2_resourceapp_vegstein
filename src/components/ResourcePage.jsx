import { useParams } from "react-router";
import "../assets/styles/resourcePage.scss"

import PageTitle from "./PageTitle";
import Resources from "./resources";

export default function ResourcePage({resources, category}){
    //const {slug} = useParams()
    //Basert på kode fra legodudes-forelesning
    const filterResources = resources.filter((resource) => resource.category === category)
    
    //<main> lå opprinnelig her, men studentassistent foreslo at det er bedre å putte det i layout, siden den skal wrappe rundt alle barneelementene.
    return(
        <>
        <PageTitle category={filterResources[0].category}/>
        <Resources resources={filterResources} title={resources.title} url={resources.url}/>
        </>
        
    )
}