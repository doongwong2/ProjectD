"use client";

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Comments from '@/components/comments/Comments';
import AuthLinks from '@/components/authLinks/AuthLinks';
import Navbar from '@/components/navbar/Navbar';
import styles from './post.module.css';

const PostPage = () => {
  const router = useRouter()
  const params = useParams()
  const { slug } = params;
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    async function loadPostData() {
      try {
        const response = await fetch(`/api/posts?guideNum=${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post data");
        }
        const data = await response.json()
        setPostData(data);
      } catch (error) {
        console.error("Error loading post data", error);
      } finally {
        setLoading(false);
      }
    }
    loadPostData();
  }, [slug]);


  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.container}>
        {loading ? (
          <div>Loading...</div>
        ) : !postData ? (
          <>
            <img 
              src="/images/initial-d-takumi-fujiwara-cry-259708911.gif" 
              alt="Admin hasn't cleared this stage"
              className={styles.errorImage}
            />
            <p>Admin has't cleared this stage yet...</p>
          </>
        ) : (
          <>
            <h1>{postData.title}</h1>
            <div className={styles.wrapper}></div>
            <video 
              ref={videoRef} 
              autoPlay 
              loop 
              muted 
              width={900} 
              controls 
              style={{ marginTop: '50px' }}
            >
              <source src={postData.video} type="video/mp4" />
            </video>
            <a href={postData.desc} className={styles.desc}>
              Yt video Link
            </a>
            <Comments postSlug={slug} />
            <AuthLinks />
          </>
        )}
      </div>
    </div>
  );
};

export default PostPage;