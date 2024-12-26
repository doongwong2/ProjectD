"use client"

import React from 'react'

import { useRouter } from 'next/navigation'
import styles from './navbar.module.css'

const Navbar = () => {
  const router = useRouter();
  const handleKeyDown = (e) => {
    if(e.key ==='X' || e.key === 'x'){
          router.back()
    }
  }

  return (
    <div className={styles.container}>
          <nav onContextMenu={handleKeyDown}>
      <button onClick={() => router.back()}>
        <img src="/images/xButton.png" width = {50} height = {50}></img>
        Back
      </button>
    </nav>
    </div>

  )
}

export default Navbar