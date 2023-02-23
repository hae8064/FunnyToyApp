import React, { useState } from 'react';
import { useEffect } from 'react';
import NaverMapComponent from '../Components/NaverMapComponent';
import { Inner } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { currentSet } from '../store/locationSlice';
import useGeolocation from '../hooks/useGeolocation.ts';
import { RiMapPin2Line } from 'react-icons/ri';
import axios from 'axios';
import { useStore } from '../store/zustandStore';
const Map = () => {
  const { naver } = window;
  const [currentLocation, setCurrentLocation] = useState();
  const naverLocation = useGeolocation();
  const [splitLocation, setSplitLocation] = useState();
  const [deleciousList, setDeleciousList] = useState([]);

  //내 위치 가져오기 (리덕스 툴킷 사용)
  const dispatch = useDispatch();
  const locationState = useSelector((state) => {
    return state.currentLocation.value;
  });

  //zustand 상태관리
  const { myLocation } = useStore();

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

  // 처음 렌더링시 서버로 API 요청
  // 서버에서 네이버 API 요청하기..
  useEffect(() => {
    // axios({
    //   method: 'GET',
    //   url: 'https://openapi.naver.com/v1/search/local?query=목동 음식점&display=5',
    //   headers: {
    //     // 'X-Naver-Client-Id': process.env.REACT_APP_CLID,
    //     // 'X-Naver-Client-Secret': process.env.REACT_APP_ClSECRET,
    //     'X-Naver-Client-Id': 'FZnbYScg8qKDrpS31uw2',
    //     'X-Naver-Client-Secret': 'AAqHSHczVc',
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // const mapList = axios.create();
    // mapList
    //   .get('https://openapi.naver.com/v1/search/local', {
    //     headers: {
    //       'X-Naver-Client-Id': 'FZnbYScg8qKDrpS31uw2',
    //       'X-Naver-Client-Secret': 'AAqHSHczVc',
    //     },
    //   })
    //   .then((response) => {
    //     console.log('response', response);
    //   });
    console.log(myLocation);
    axios
      .get('/map/:id', {
        params: { locationData: myLocation },
      })
      .then((res) => {
        console.log(res.data.body);
        // console.log(res);
      });
  }, []);

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
      <div className="deleciousList"></div>
      <NaverMapComponent />
    </Inner>
  );
};

export default Map;
