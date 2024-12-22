

import styles from './homepage.module.css'
import Link from 'next/link'
import './globals.css';

export default async function Home() {

  return (
    <div className={styles.backgroundImg}>
      <div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div><img src="images/Kanto map.png" className={styles.image} /></div>
            <div className={styles.Mydiv}>
              <br></br>
              <p><Link href="/simplePages/projectD.html" className={styles.link}>PROJECT.D</Link></p>
              <p><Link href="/simplePages/memberProfiles/memberProfiles.html" className={styles.link}>MEMBER PROFILE</Link></p>
              <p><Link href="/Show Room/index.html" className={styles.link}>SHOWROOM</Link></p>
              <p><Link href="/simplePages/Admin's Guide.html" className={styles.link}>RACING GUIDE</Link></p>
              <p><Link href="/" className={styles.link}>CREDITS</Link></p>
            </div>
            <h1 className={styles.header1}>PROJECT.D</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
