"use client"

import React from 'react'
import styles from './comments.module.css'
import Link from "next/link"
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

const extractYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

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
    const [url, setUrl] = useState("")

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc, url, postSlug })
        })
        mutate();
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated"
                ? (<div className={styles.write}>
                    <textarea placeholder='write a comment' className={styles.input} onChange={e => setDesc(e.target.value)} />
                    <textarea type="text" placeholder="URL (optional)" className={styles.input} value={url} onChange={e => setUrl(e.target.value)} />
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
                                <p className={styles.desc}>{item.desc}
                                    <br></br>
                                    {item.url && extractYoutubeId(item.url) ? (
                                        <iframe
                                            width="560"
                                            height="315"
                                            src={`https://youtube.com/embed/${extractYoutubeId(item.url)}`}
                                            title="Youtube Video Player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className={styles.video}
                                        >
                                        </iframe>
                                    ) : (
                                        item.url && (
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                My Video Link
                                            </a>
                                        )
                                    )}

                                </p>
                            </div>)
                    })}
            </div>
        </div>
    )
}

export default Comments