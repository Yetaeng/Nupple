import React from 'react';
import { useMediaQuery } from 'react-responsive'
import styles from './header.module.css';

export const Header = () => {
  const isDesktopOrTablet = useMediaQuery({
    query: '(min-width: 768px)'
  });

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Supplelator</h1>
      {isDesktopOrTablet && 
        <nav>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>분석</li>
            <li className={styles.menuItem}>커뮤니티</li>
            <li className={styles.menuItem}>마이 페이지</li>
          </ul>
        </nav>
      }
    </header>
  )
};
