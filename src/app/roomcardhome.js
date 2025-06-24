import React from "react"
import styles from "./roomcardhome.module.css"

export default function Homecard(){
    return(
        <div>
        <div className={styles.homecardcont}>
            <h2 className={styles.roomtitle}>Chat Room: XYZ</h2>
            <h3 className={styles.roommembers}>Members: ABC, DEF, GHI...</h3>
            <div className={styles.rrt}>
            <h3 className={styles.roomrecent}>Recent: Recent Message</h3>
            <h3 className={styles.roomtime}>24-06-2025 5:08PM</h3>
            </div>
        </div>
        
        </div>
    )
}