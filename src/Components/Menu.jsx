import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from '../styles/navbar.module.scss';
import useGeolocation from '../hooks/useGeolocation.ts';
import { useStore } from '../store/zustandStore';
import axios from 'axios';

const Menu = ({ setShowMenu, pathName }) => {
  const location = useLocation();
  let currentUserId = location.pathname.split('/')[2].split(':')[1];
  const { naver } = window;
  const [currentLocation, setCurrentLocation] = useState();
  const naverLocation = useGeolocation();

  //zustand 상태관리
  const { myLocation, locationSet2, foodListSet } = useStore();

  const homeClickEvent = () => {
    naver.maps.Service.reverseGeocode(
      {
        location: new naver.maps.LatLng(
          naverLocation.coordinates.lat.toFixed(4),
          naverLocation.coordinates.lng.toFixed(4)
        ),
        orders: [
          naver.maps.Service.OrderType.ADDR,
          naver.maps.Service.OrderType.ROAD_ADDR,
        ].join(','),
      },
      function (status, response) {
        const result = response;
        let locationValue =
          result.result.items[0].address.split(' ')[1] +
          ' ' +
          result.result.items[0].address.split(' ')[2];
        axios
          .get('/map/:id', {
            params: {
              locationData: {
                locationValue,
                // myLocation2,
              },
            },
          })
          .then((res) => {
            let obj = JSON.parse(res.data.body);
            foodListSet(obj.items);
          });

        setCurrentLocation(result.result.items[0].address);
        locationSet2(locationValue);
      }
    );
    setShowMenu(false);
  };

  return (
    <div className={styles.menuComponent}>
      <div className={styles.dimmer} onClick={() => setShowMenu(false)} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.menubar}>
            <Link
              style={{ listStyle: 'none', textDecoration: 'none' }}
              to={`/home/:${currentUserId}`}
            >
              <ul onClick={homeClickEvent}>Home</ul>
            </Link>
            <hr />
            <Link
              style={{ listStyle: 'none', textDecoration: 'none' }}
              to={`/map/:${currentUserId}`}
            >
              <ul onClick={homeClickEvent}>주변 맛집</ul>
            </Link>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
