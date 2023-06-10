import { getdatas } from "@componets/loading/delay";

const AboutRoute = async () =>{

    const data = await getdatas();
    return(
        <>
        
        <address style={{minHeight:1200}}>
            <h1>Hello this is my address</h1>
            <h1>Hello this is my address</h1>
        </address>
        
        </>
    )
}

export default AboutRoute;