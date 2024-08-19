import React from 'react';
import Image from 'next/image';
import styles from '/Users/shreyansut/react-app/eCell-Website/styles/aboutus.module.css';
import logoImage from '/Users/shreyansut/react-app/eCell-Website/components/Ecell logo white 2.png'; // Adjust the path according to your project structure

const HomePage = () => {
  return (
    <div className={styles.App}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Image src={logoImage} alt="eCell NSUT Logo" className={styles.logoImage} />
          <span>eCell NSUT</span>
        </div>
        <ul className={styles.navbarLinks}>
          <li><a href="#about">About Us</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#collaborations">Collaborators</a></li>
        </ul>
      </nav>
      <div className={styles.gradientOverlay}></div>
      <div className={`${styles.pinkishCircle} ${styles.circleTopLeft}`}></div>
      <div className={`${styles.pinkishCircle} ${styles.circleBottomRight}`}></div>
      
      <div className={styles.main}>
        <h1 className={styles.title}>Push Boundaries Beyond Your Limits</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet sagittis elit vitae suscipit. Praesent vitae porta mi, ut ullamcorper urna. Vestibulum vulputate maximus aliquam.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
