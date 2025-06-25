'use client'
import Homecard from "../roomcardhome"
import Sidebar from "../component/sidebar"
import Login from "../myaccount/page"
import { useEffect, useState } from "react"

export default function Home(){
    const [userid,setuserid] = useState(null)
    useEffect(()=>{
        const temp = localStorage.getItem('userid');
        if(temp){
            setuserid(temp);
        }
    },[userid])
    return(
        <div>
            <Sidebar></Sidebar>
            <div className="mainarea">
            {userid?(
                <div>
                <div className="wcom">Welcome {userid}!</div>
                <div id="dot">
                <div id="chatdisplay">
                    <img src='/images/add.svg' id="addbox"></img>
                    <h2 id="jnr">Join Rooms Now</h2>
                </div>
                </div>
                </div>
            ):(
                <div>Please Log IN</div>
            )

            }
            </div>
        </div>
    )
}