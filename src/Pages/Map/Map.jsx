import React, { useState } from 'react';
import NaverMapComponent from '../../Components/NaverMapComponent';
import { Inner } from './styles';
import useGeolocation from '../../hooks/useGeolocation.ts';
import { RiMapPin2Line } from 'react-icons/ri';
import { useStore } from '../../store/zustandStore';
const Map = () => {
  const { naver } = window;
  const [currentLocation, setCurrentLocation] = useState();
  const naverLocation = useGeolocation();
  //zustand 상태관리
  const { myLocation2, clickMarker } = useStore();

  const onRefreshBtn = () => {
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
        setCurrentLocation(result.result.items[0].address);
      }
    );
  };

  //맛집 더보기 버튼 클릭 이벤트
  const seeMoreBtn = () => {
    window.open(clickMarker.link);
  };

  return (
    <Inner>
      <div className="topComponent">
        <span className="Title">주변 맛집 목록</span>
        <span className="currentLocation">현재위치: {myLocation2}</span>
        <RiMapPin2Line className="searchIcon" onClick={onRefreshBtn} />
      </div>
      <div className="deleciousList">
        {!clickMarker.title ? (
          <span className="nothingInfo">마커를 클릭 해 주세요.</span>
        ) : (
          <>
            <div className="contents">
              {console.log(clickMarker.title.split(' ')[0].replace('<b>', '').replace('</b>', ' '))}
              <h4 className="title">{clickMarker.title.split(' ')[0].replace('<b>', '').replace('</b>', ' ')}</h4>
              <p className="category">{clickMarker.category}</p>
              <p className="address">{clickMarker.roadAddress}</p>
            </div>
            <button className="infoBtn" onClick={seeMoreBtn}>
              더보기
            </button>
          </>
        )}
      </div>
      <NaverMapComponent />
    </Inner>
  );
};

export default Map;
