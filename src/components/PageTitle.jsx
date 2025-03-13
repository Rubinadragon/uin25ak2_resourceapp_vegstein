import "../assets/styles/resourcePage.scss"

export default function PageTitle({resource, category}){
    //https://stackoverflow.com/questions/61914833/reactjs-convert-input-string-to-upper-case
    return (
        <h2>{category.toUpperCase()}</h2>
    )
}