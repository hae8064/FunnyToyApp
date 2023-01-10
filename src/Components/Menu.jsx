import React from 'react';
import styles from '../styles/navbar.module.scss';
const Menu = ({ setShowMenu }) => {
  return (
    <div className={styles.menuComponent}>
      <div className={styles.dimmer} onClick={() => setShowMenu(false)} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.menubar}>
            <ul>게시판</ul>
            <hr />
            <ul>지도</ul>
            <hr />
            <ul>랜덤음식</ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
