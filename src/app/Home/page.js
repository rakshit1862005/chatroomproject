'use client'
import Homecard from "../roomcardhome"
import Sidebar from "../component/sidebar"
import Login from "../myaccount/page"
import { useEffect, useState } from "react"
import socket from "@/socket"
import axios from "axios"
import MessagesPage from "../component/message"
import MessageSection from "../component/UserList"

async function getchats(username) {
        let response = await axios.post(
          'https://rjlp2mzq-8000.inc1.devtunnels.ms/api/lastchats',
          { username: 'userxyz' }
        );
        console.log(response.data);
}

export default function Home(){
    const [userid,setuserid] = useState(null)
    const [chatlist,setchatlist] = useState(null);
    
    useEffect(()=>{
        const temp = localStorage.getItem('userid');
        if(temp){
            setuserid(temp);
            const tchat = getchats(temp);
            if(tchat){
                setchatlist(tchat);
            }
        }
    },[userid])

    const [chat,setchat] = useState(null);


    return(
        <div>
            <Sidebar></Sidebar>
            <div className="mainarea">
            {userid?(
                <>
                {!chatlist?(
                <div>
                <div className="wcom">Welcome {userid}!</div>
                <div id="dot">
                <div id="chatdisplay">
                    <img src='/images/add.svg' id="addbox"></img>
                    <h2 id="jnr">---- Join Rooms Now ----</h2>
                </div>
                </div>
                </div>
                ):(
                    <div>
                        <MessagesPage></MessagesPage>
                    </div>
                )}
                </>
            ):(
                <div className="mainarea">
                <div className="wcom">Please Log IN</div>
                </div>
            )

            }
            </div>
        </div>
    )
}