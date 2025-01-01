"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './navbar.module.css'

const Navbar = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'X' || e.key === 'x') {
        router.back();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  return (
    <div className={styles.container}>
      <nav>
        <div>
          <img
            src="/images/Dpad.png"
            alt="Dpad Icon"
            style={{ height: '40px', width: '40px' }}
          />
          Scroll
        </div>
        <button onClick={() => router.back()}>
          <img 
            src="/images/xButton.png" 
            alt="Back Icon" 
            style={{ height: '40px', width: '40px' }} 
          />
          Back
        </button>
      </nav>
    </div>
  );
};

export default Navbar;