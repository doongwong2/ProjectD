"use client"

import React from "react";
import { useState } from "react";
import styles from "./authlinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {

    const [open, setOpen] = useState(false);
    const { status } = useSession();
    return (
        <>
            {status === "unauthenticated" ? (
                <></>
            ) : (
                <>
                    <span className={styles.link} onClick={signOut}>Logout</span>
                </>
            )}
            {open && (
                <>
                    {status === "notauthenticated" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <span className={styles.link}>Logout</span>
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default AuthLinks