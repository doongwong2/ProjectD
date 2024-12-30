"use client";

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Comments from '@/components/comments/Comments';
import AuthLinks from '@/components/authLinks/AuthLinks';
import Navbar from '@/components/navbar/Navbar';
import styles from './post.module.css';
import { withMiddleware } from 'swr/_internal';

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
        console.log(data);
        setPostData(data);
      } catch (error) {
        console.error("Error loading post data", error);
      } finally {
        setLoading(false);
      }
    }
    loadPostData();
  }, [slug]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'X' || e.key === 'x') {
        router.push("/simplePages/Admin's Guide.html")
      }
    }
    window.addEventListener('keydown', handleKeyDown);
  })

  // 將 Navbar 移到外層，確保在所有狀態下都保持一致的位置
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {loading ? (
          <div className={styles.centerContent}>Loading...</div>
        ) : !postData ? (
          <div className={styles.centerContent}>
            <img 
              src="/images/initial-d-takumi-fujiwara-cry-259708911.gif" 
              alt="Admin hasn't cleared this stage"
              className={styles.errorImage} 
            />
            <p>Admin hasn't cleared this stage yet...</p>
          </div>
        ) : (
          <>
            <h1>{postData.title}</h1>
            <div>
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
            </div>
            <a href={postData.desc} className={styles.desc}>
              Yt video Link
            </a>
            <Comments postSlug={slug} />
            <AuthLinks />
          </>
        )}
      </div>
    </>
  );
};

export default PostPage;