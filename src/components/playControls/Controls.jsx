"use client"

import React, { useRef } from 'react'
import styles from "./controls.module.css";

const Controls = ({ videoRef }) => {
    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        }
        else {
            videoRef.current.pause();
        }
    };

    return (
        <div className={styles.container}>

        </div>
    )
}



export default Controls