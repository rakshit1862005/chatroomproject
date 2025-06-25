import Homecard from "../roomcardhome"
import Sidebar from "../component/sidebar"
import Login from "../myaccount/page"

export default function Home(){
    return(
        <div>
            <Sidebar></Sidebar>
            <Login></Login>
        </div>
    )
}