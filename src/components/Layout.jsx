import Nav from "./Nav";
import PageTitle from "./PageTitle";
import Resources from "./Resources";

export default function Layout(){
    return(
        <>
            <header>
                <Nav/>
            </header>
            <main>
                <Resources/>
            </main>
        </>
        
    //<script src="script.js"></script>
    )
}