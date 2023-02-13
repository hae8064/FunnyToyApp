import React, { useEffect, useRef } from 'react';

const NaverMapComponent = () => {
  useEffect(() => {
    const { naver } = window;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5656, 126.9769);
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
  }, []);
  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default NaverMapComponent;
