import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlassChart, faNetworkWired, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './mobileNav.module.css';

export const MobileNav = () => {
  
  return (
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlassChart}/>
        <span>분석</span>
      </li>
      <li className={styles.menuItem}>
        <FontAwesomeIcon className={styles.icon} icon={faNetworkWired}/>
        <span>커뮤니티</span>
      </li>
      <li className={styles.menuItem}>
        <FontAwesomeIcon className={styles.icon} icon={faUser}/>
        <span>마이페이지</span>
      </li>
    </ul>
  )
}