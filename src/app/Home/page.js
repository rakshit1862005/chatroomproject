'use client'
import Homecard from "../roomcardhome"
import Sidebar from "../component/sidebar"
import Login from "../myaccount/page"
import { useEffect, useState } from "react"
import socket from "@/socket"
import axios from "axios"


async function getchats(username) {
    let response = await axios.post()
}

async function send(message) {
    socket.emit("send_message",{message:message});
}

socket.on("connect", () => {
  console.log("✅ Connected to socket:", socket.id);
});

export default function Home(){
    const [userid,setuserid] = useState(null)
    const [chatlist,setchatlist] = useState(null);
    
useEffect(() => {
    const handler = (data) => {
        console.log("📥 Message received:", data);
    };

    socket.on("recieve_message", handler);

    return () => {
        socket.off("recieve_message", handler); 
    };
}, []);

    useEffect(()=>{
        const temp = localStorage.getItem('userid');
        if(temp){
            setuserid(temp);
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
                    <div></div>
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