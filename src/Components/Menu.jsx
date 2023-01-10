import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from '../styles/navbar.module.scss';
const Menu = ({ setShowMenu }) => {
  const location = useLocation();
  const currentUserId = location.pathname.split('/')[2].split(':')[1];
  const params = useParams();
  return (
    <div className={styles.menuComponent}>
      <div className={styles.dimmer} onClick={() => setShowMenu(false)} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.menubar}>
            <Link to={`/home/:${currentUserId}`}>
              <ul onClick={() => setShowMenu(false)}>Home</ul>
            </Link>
            <hr />
            <ul>지도</ul>
            <hr />
            <ul>랜덤추천</ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
