"use client"

import React from 'react'
import styles from './loginPage.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const { data, status } = useSession()
  const router = useRouter()



  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>
  }
  if (status === "authenticated") {
    if (localStorage.getItem('redirectUrl')) {
      //push to the page the user was seeing before he chose to login.
    }
    else {
      router.push("/simplePages/Admin's Guide.html");
    }

  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton} onClick={() => signIn("github")}>Sign in with Github</div>
      </div>
    </div>
  )
}

export default LoginPage