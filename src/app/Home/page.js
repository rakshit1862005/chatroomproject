'use client'
import Homecard from "../roomcardhome"
import Sidebar from "../component/sidebar"
import Login from "../myaccount/page"
import { useEffect, useState } from "react"
import io from 'socket.io-client'

const socket = io.connect('http://localhost:8000');


async function send(message) {
    socket.emit("send_message",{message:message});
}

export default function Home(){
    const [userid,setuserid] = useState(null)
    useEffect(()=>{
        socket.on("recieve_message",(data)=>{
            console.log(data);
        })
    },[socket])
    
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
                    <h2 id="jnr">---- Join Rooms Now ----</h2>
                    <input id="message" type="text"></input>
                    <button id="logout" onClick={()=>{send(document.getElementById('message').value)}}>send</button>
                </div>
                </div>
                </div>
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