"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import "./style.css"

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve(src);  // Resolve when the script is loaded
    script.onerror = (error) => reject(error);  // Reject if there's an error
    document.body.appendChild(script);
  });
}

export default function AdminGuide() {

  useEffect(() => {
    const loadScripts = async () => {
      try {
        // Load jQuery, Swiper, and your custom script
        await Promise.all([
          loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'),
          loadScript('https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.2.0/js/swiper.js'),
          loadScript('/simplePages/script.js'),
        ]);
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };
    loadScripts();
  }, []);

  return (
    <div>

      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" data-slug="myogi">
            <img src="/images/Map/Mini Map/Mount Myogi.jpg" />
          </div>
          <div className="swiper-slide" data-slug="usui">
            <img src="/images/Map/Mini Map/Usui Touge.jpg" />
          </div>
          <div className="swiper-slide" data-slug="akagi">
            <img src="/images/Map/Mini Map/Mount Akagi.jpg" />
          </div>
          <div className="swiper-slide" data-slug="akina">
            <img src="/images/Map/Mini Map/Mount Akina.jpg" />
          </div>
          <div className="swiper-slide" data-slug="irohazaka">
            <img src="/images/Map/Mini Map/Irohazaka.jpg" />
          </div>
          <div className="swiper-slide" data-slug="happogahara">
            <img src="/images/Map/Mini Map/Happogahara.jpg" />
          </div>
          <div className="swiper-slide" data-slug="shomaru">
            <img src="/images/Map/Mini Map/Shomaru Pass.jpg" />
          </div>
          <div className="swiper-slide" data-slug="tsuchisaka">
            <img src="/images/Map/Mini Map/Tsuchisaka.jpg" />
          </div>
        </div>
        <div className="swiper-button-prev">
          <img src="/images/btn left.png" />
        </div>
        <div className="swiper-button-next">
          <img src="/images/btn right.png" />
        </div>
      </div>

      <div className="center-line">
        <img src="/images/center line.png" />
      </div>

      <div className="place-name" id="place-name">
        <img src="/images/Name/Mount Myogi.png" />
      </div>

      <div className="route" id="route">
        <img src="/images/Route/Mount Myogi.png" />
      </div>

      <div className="character-container">
        <div className="character" id="character1">
          <img src="/images/character/Itsuki_Takeuchi.png" />
        </div>
        <div className="character" id="character2">
          <img src="/images/character/Kenji.png" />
        </div>
        <div className="character" id="character3">
          <img src="/images/character/Shingo_Shoji.png" />
        </div>
      </div>

      <div className="music-player">
        <iframe src="../music-player-audio-player/music-player-audio-player/dist/index.html"></iframe>
      </div>
    </div>
  );
}
