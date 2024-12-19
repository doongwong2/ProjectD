// app/posts/[slug]/page.js
"use client"; // This is needed for client-side rendering.

import { useParams } from 'next/navigation';
import { useEffect, useState, use } from 'react';
import Comments from '@/components/comments/Comments';
import AuthLinks from '@/components/authLinks/AuthLinks';
import styles from './post.module.css';

const lastViewed = () => {
  localStorage.setItem('redirectURL', window.location.href);
}

const PostPage = () => {
  const params = useParams()
  // console.log(params);

  const { slug } = params; // Dynamic slug parameter

  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (!postData) return <div>No post found</div>; // Show error state if no data

  lastViewed();
  return (
    <div>
      <div className={styles.container}>
        <h1>{postData.title}</h1>
        <video controls src="\youtube-ambient-mode\youtube-ambient-mode\dist\Video\Initial D_ Street Stage - Part 1 - Itsuki Takeuchi (ENG SUB).mp4#t=222,424" id="blurred"></video>
        <iframe width="1020" height="630" src="https://www.youtube.com/embed/-lje9ONK3HI?si=FCk8uO8tvyXhnqgL&amp;start=193" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <br></br>
        <a href={postData.desc}>video link</a>
        <Comments postSlug={slug}></Comments>
        <AuthLinks></AuthLinks>
      </div>
    </div>
  );
};

export default PostPage;
