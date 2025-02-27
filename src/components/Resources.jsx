import { useParams } from 'react-router'
import PageTitle from './PageTitle'

export default function Resources({resources}){
    //Fikk hjelp av studentassistent til å finne ut at jeg manglet paranteser på slutten
    const {slug} = useParams()

    //Basert på kode fra legodudes-forelesning
    const filterResources = resources.filter((resource) => resource.category === slug)

    return(
        <>
            {filterResources.map((resource, index) =>
                (<article id= "article" key={index}>
                    <h4>{resource.title}</h4>
                    <p>{resource.url}</p>
                </article>))}
        </>
    )
}