"use client"

import React from 'react'
import styles from './comments.module.css'
import Link from "next/link"
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

const fetcher = async (url) => {
    const res = await fetch(url);
    console.log(res)
    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
}

const Comments = ({ postSlug }) => {

    const { status } = useSession()
    console.log(status)

    const { data, mutate, isLoading } = useSWR(`https://project-d-livid.vercel.app/api/comments?postSlug=${postSlug}`, fetcher
    )
    console.log(postSlug);

    const [desc, setDesc] = useState("")

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc, postSlug })
        })
        mutate();
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated"
                ? (<div className={styles.write}>
                    <textarea placeholder='write a comment' className={styles.input} onChange={e => setDesc(e.target.value)} />
                    <button className={styles.button} onClick={handleSubmit}>Send</button>
                </div>)
                : (<Link href="/login">Login to comment.</Link>)}

            <div className={styles.comments}>
                {isLoading
                    ? "loading"
                    : data?.map((item) => {
                        return (
                            <div className={styles.comment} key={item.id}>
                                <div className={styles.user}>
                                    {item?.user.image &&
                                        <Image className={styles.image} src={item.user.image} alt="p1.jpeg" width={50} height={50} />}
                                    <div className={styles.userInfo}>
                                        <span className={styles.username}>{item.user.name}</span>
                                        <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
                                    </div>
                                </div>
                                <p className={styles.desc}>{item.desc}</p>
                            </div>)
                    })}
            </div>
        </div>
    )
}

export default Comments