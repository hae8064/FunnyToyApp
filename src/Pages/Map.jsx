import React, { useState } from 'react';
import { useEffect } from 'react';
import NaverMapComponent from '../Components/NaverMapComponent';
import { Inner } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { currentSet } from '../store/locationSlice';

const Map = () => {
  //내 위치 가져오기 (리덕스 툴킷 사용)
  const dispatch = useDispatch();
  const locationState = useSelector((state) => {
    return state.currentLocation.value;
  });

  // 처음 렌더링시 서버로 API 요청
  // 서버에서 네이버 API 요청하기..

  useEffect(() => {
    // dispatch(currentSet({ dada: 1, dsa: 2 }));
    console.log(locationState);
  }, [locationState]);

  return (
    <Inner>
      <div className="Title">주변 맛집 리스트</div>
      <NaverMapComponent />
    </Inner>
  );
};

export default Map;
