import { NodeResolveLoader } from 'nunjucks';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useGeolocation from '../hooks/useGeolocation.ts';
import { currentSet } from '../store/locationSlice';
import { useStore } from '../store/zustandStore';
import user from '../imgs/icons8-user-32.png';

const NaverMapComponent = () => {
  const naverLocation = useGeolocation();
  const { naver } = window;
  const [myLocation, setMyLocation] = useState({});
  //zustand 상태관리
  const { myLocation2, foodList, foodListSet, clickMarker, setClickMarker } =
    useStore();
  const [otherLatLngs, setOtherLatLngs] = useState([]);
  const content = ['<div>', `<img src = ${user} alt = "사람"/>`, '</div>'].join(
    ''
  );

  //맛집 목록 전체 좌표 변환
  //현재 위치 가져오기
  useEffect(() => {
    console.log(foodList);
    
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
      zoom: 13,
      // 확대 단계
    };
    const map = new naver.maps.Map('map', mapOptions);

    
    for (let i = 0; i < foodList.length; i++) {
      let tm128 = new naver.maps.Point(+foodList[i].mapx, +foodList[i].mapy);
      let latlng2 = naver.maps.TransCoord.fromTM128ToLatLng(tm128);
      console.log(latlng2._lat);

      let otherMarkers = new naver.maps.Marker({
        map,
        position: new naver.maps.LatLng(latlng2._lat, latlng2._lng),
      });
      naver.maps.Event.addListener(otherMarkers, 'click', getClickHandler(i));
    }

    let currentMarker = new naver.maps.Marker({
      map,
      position: location,
      icon: {
        content,
        size: new naver.maps.Size(32, 32),
        anchor: new naver.maps.Point(16, 16),
      },
    });

    function getClickHandler(seq) {
      return function (e) {
        setClickMarker(foodList[seq]);
      };
    }

  }, [foodList]);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
};

export default NaverMapComponent;
