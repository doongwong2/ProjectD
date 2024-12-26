// app/posts/[slug]/page.js
"use client"; // This is needed for client-side rendering.

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Comments from '@/components/comments/Comments';
import AuthLinks from '@/components/authLinks/AuthLinks';
import Navbar from '@/components/navbar/Navbar';
import styles from './post.module.css';

const PostPage = () => {
  const router = useRouter()
  const params = useParams()
  // console.log(params);

  const { slug } = params; // Dynamic slug parameter

  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);


  // This is where we use the use() hook to resolve the dynamic `slug` parameter asynchronously
  useEffect(() => {
    async function loadPostData() {
      try {
        const response = await fetch(`/api/posts?guideNum=${slug}`); // Adjust URL to your actual API
        if (!response.ok) {
          throw new Error("Failed to fetch post data");
        }
        const data = await response.json()
        console.log(data);

        setPostData(data);
      } catch (error) {
        console.error("Error loading post data", error);
      } finally {
        setLoading(false);
      }
    }

    loadPostData();

  }, [slug]); // Re-fetch data when the slug changes



  if (loading) return <div>Loading...</div>; // Show loading state

  if (!postData) return (
  <div className={styles.container}>
    <Navbar></Navbar>
    <img src = "\images\initial-d-takumi-fujiwara-cry-259708911.gif"></img>
    <br></br>Admin has't cleared this stage yet...
    </div>


  ); // Show error state if no data

  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.container}>
        <h1>{postData.title}</h1>
        <div>
          <div className={styles.wrapper}>
          </div>
          <video ref={videoRef} autoPlay loop muted width={900} controls style={{ marginTop: '50px' }}>
            <source src={postData.video} type="video/mp4" />
          </video>
        </div>

        <a href={postData.desc} className={styles.desc}>Yt video Link</a>
        <Comments postSlug={slug}></Comments>
        <AuthLinks></AuthLinks>
      </div>
    </div>
  );
};

export default PostPage;
