import React from 'react';
import styles from './footer.module.css';
import { useMediaQuery } from 'react-responsive'
import { MobileNav } from '../mobileNav/MobileNav';

export const Footer = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  });

  return (
    <footer className={styles.footer}>
      <img className={styles.github} src="./images/github_logo.png" alt="github" width="64px" height="64px"/>
      <p>Yetaeng. All rights reserved.</p>
      { isMobile && <MobileNav /> }
    </footer>
  )
};