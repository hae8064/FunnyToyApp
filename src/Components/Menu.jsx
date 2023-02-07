import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from '../styles/navbar.module.scss';
const Menu = ({ setShowMenu, pathName }) => {
  const location = useLocation();
  let currentUserId = location.pathname.split('/')[2].split(':')[1];
  const [currentId, setCurrentId] = useState(pathName);

  useEffect(() => {
    // setCurrentId(location.pathname.split('/')[2].split(':')[1]);
  }, [pathName]);

  const params = useParams();

  const homeClickEvent = () => {
    setShowMenu(false);
  };

  return (
    <div className={styles.menuComponent}>
      <div className={styles.dimmer} onClick={() => setShowMenu(false)} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.menubar}>
            <Link to={`/home/:${currentUserId}`}>
              {/* <Link to={pathName}> */}
              {/* <ul onClick={() => setShowMenu(false)}>Home</ul> */}
              <ul onClick={homeClickEvent}>Home</ul>
            </Link>
            <hr />
            <Link to={`/map/:${currentUserId}`}>
              <ul onClick={homeClickEvent}>지도</ul>
            </Link>
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
