import React, { useState } from 'react';
import { useEffect } from 'react';
import NaverMapComponent from '../Components/NaverMapComponent';
import { Inner } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { currentSet } from '../store/locationSlice';
import useGeolocation from '../hooks/useGeolocation.ts';
import { RiMapPin2Line } from 'react-icons/ri';
const Map = () => {
  const { naver } = window;
  const [currentLocation, setCurrentLocation] = useState();
  const naverLocation = useGeolocation();
  const [splitLocation, setSplitLocation] = useState();

  //내 위치 가져오기 (리덕스 툴킷 사용)
  const dispatch = useDispatch();
  const locationState = useSelector((state) => {
    return state.currentLocation.value;
  });

  const onRefreshBtn = () => {
    naver.maps.Service.reverseGeocode(
      {
        location: new naver.maps.LatLng(
          // lat === undefined ? 37.3849483 : lat2,
          // lng === undefined ? 127.1229117 : lng2
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
        setCurrentLocation(result.result.items[0].address);
      }
    );
  };

  // 처음 렌더링시 서버로 API 요청
  // 서버에서 네이버 API 요청하기..
  useEffect(() => {
    // dispatch(currentSet({ dada: 1, dsa: 2 }));
    console.log('현재 주소: ' + currentLocation);
  }, [currentLocation]);

  return (
    <Inner>
      <div className="topComponent">
        <span className="Title">주변 맛집 목록</span>
        <span className="currentLocation">
          현재위치:{' '}
          {currentLocation !== undefined
            ? currentLocation.split(' ')[1] +
              ' ' +
              currentLocation.split(' ')[2]
            : '위치 정보 없음'}
        </span>
        <RiMapPin2Line className="searchIcon" onClick={onRefreshBtn} />
      </div>
      <NaverMapComponent />
    </Inner>
  );
};

export default Map;
