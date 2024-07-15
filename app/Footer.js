import React from 'react';
import styles from './globals.css'; // Import your CSS module

const Footer = () => {
  return (
      <footer className={styles.footer}>
          <div className={styles.collaborations}>
              {/* Collaborations section */}
              <div className={styles.logoSlider}>
                  {/* Logos of different companies (implement sliding if needed) */}
                  <img src="/logo1.png" alt="Company Logo" />
                  <img src="/logo2.png" alt="Company Logo" />
                  <img src="/logo3.png" alt="Company Logo" />
                  <img src="/logo4.png" alt="Company Logo" />
                  <img src="/logo5.png" alt="Company Logo" />
                  <img src="/logo6.png" alt="Company Logo" />
                  <img src="/logo7.png" alt="Company Logo" />
                  <img src="/logo8.png" alt="Company Logo" />
                  <img src="/logo9.png" alt="Company Logo" />
                  <img src="/logo10.png" alt="Company Logo" />
                  <img src="/logo11.png" alt="Company Logo" />
                  <img src="/logo12.png" alt="Company Logo" />
                  <img src="/logo13.png" alt="Company Logo" />
                  <img src="/logo14.png" alt="Company Logo" />
                  <img src="/logo15.png" alt="Company Logo" />
                  {/* Add more logos as needed. */}
              </div>
          </div>
          <div className={styles.contact}>
              {/* Contact us section */}
              <div className={styles.contactLeft}>
                  {/* Contact details */}
                  Contact Us: contact@example.com
              </div>
              <div className={styles.contactRight}>
                  {/* Empty div */}
              </div>
          </div>
          <div className={styles.description}>
              {/* Description section */}
              <div className={styles.descriptionLine}></div>
              <div className={styles.descriptionContent}>
                  {/* Logo and description */}
                  <div className={styles.logo}>
                      {/* Left side: logo */}
                      <img src="/your-logo.png" alt="Your Company Logo" />
                  </div>
                  <div className={styles.descriptionText}>
                      {/* Right side: description */}
                      About your company and services.
                      About your company and services.
                      About your company and services.
                      About your company and services.
                      About your company and services.
                      About your company and services.
                  </div>
              </div>
          </div>
          <div className={styles.gallery}>
              {/* Gallery section */}
              {/* Add your gallery content here */}
              <div className={styles.galleryImages}>
                  {/* Example of gallery images */}
                  <img src="/gallery1.jpg" alt="Gallery Image 1" />
                  <img src="/gallery2.jpg" alt="Gallery Image 2" />
                  <img src="/gallery3.jpg" alt="Gallery Image 3" />
                  <img src="/gallery4.jpg" alt="Gallery Image 4" />
                  <img src="/gallery5.jpg" alt="Gallery Image 5" />
                  <img src="/gallery6.jpg" alt="Gallery Image 6" />
                  <img src="/gallery7.jpg" alt="Gallery Image 7" />
                  <img src="/gallery8.jpg" alt="Gallery Image 8" />
                  <img src="/gallery9.jpg" alt="Gallery Image 9" />
              </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.copyright}>
              {/* Copyright section */}
              <div className={styles.copyrightLeft}>
                  {/* Copyright text */}
                  &copy; 2024 Your Company
              </div>
              <div className={styles.copyrightRight}>
                  {/* Anchor tags */}
                  <a href="#">Terms of Service</a>
                  <a href="#">Privacy Policy</a>
              </div>
          </div>
      </footer>
  );
}

export default Footer;