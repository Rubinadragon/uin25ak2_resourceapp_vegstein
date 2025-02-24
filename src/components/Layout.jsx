import Nav from "./Nav";

export default function Layout({children}){
    return(
        <>
            <header>
                <Nav/>
            </header>
            {children}
        </>
        
    //<script src="script.js"></script>
    )
}