import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useGeolocation from '../hooks/useGeolocation.ts';
import { currentSet } from '../store/locationSlice';

const NaverMapComponent = () => {
  const naverLocation = useGeolocation();
  const dispatch = useDispatch();
  const { naver } = window;
  const [myLocation, setMyLocation] = useState({});

  //현재 위치 가져오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert('현재위치를 알수 없습니다.');
    }
  }, []);

  useEffect(() => {
    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(
      myLocation.latitude,
      myLocation.longitude
    );
    const mapOptions = {
      center: location,
      // 중앙에 배치할 위치
      zoom: 15,
      // 확대 단계
    };
    const map = new naver.maps.Map('map', mapOptions);
    new naver.maps.Marker({
      map,
      position: location,
    });

    dispatch(
      currentSet({ lat: myLocation.latitude, lng: myLocation.longitude })
    );
  }, [myLocation]);
  return <div id="map" style={{ width: '100%', height: '350px' }} />;
};

export default NaverMapComponent;
