import Nabvar from "./navbar/Nabvar"

const Layout = ({children})  => {



    return (
            <>
            <Nabvar/>
            {children}
            {/* <Footer/> */}
            </>
    )
}

export default Layout