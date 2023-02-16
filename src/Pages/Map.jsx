import React, { useState } from 'react';
import { useEffect } from 'react';
import NaverMapComponent from '../Components/NaverMapComponent';
import { Inner } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { currentSet } from '../store/locationSlice';
import useGeolocation from '../hooks/useGeolocation.ts';

const Map = () => {
  //내 위치 가져오기 (리덕스 툴킷 사용)
  const dispatch = useDispatch();
  const locationState = useSelector((state) => {
    return state.currentLocation.value;
  });
  const { naver } = window;
  const [currentLocation, setCurrentLocation] = useState([]);
  const naverLocation = useGeolocation();

  const onRefreshBtn = () => {
    console.log(naverLocation.coordinates.lat.toFixed(4));

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
      <div className="Title">주변 맛집 리스트</div>
      <button onClick={onRefreshBtn}>내 주변 조회</button>
      <NaverMapComponent />
    </Inner>
  );
};

export default Map;
