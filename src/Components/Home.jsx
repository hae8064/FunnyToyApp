import React from 'react';
import { useState } from 'react';
import './Home.css';

const Home = () => {
  const [memo, setMemo] = useState(0);

  return (
    <div className="homeComponent">
      <div className="homeTop">
        <div className="leftFetures">
          <button className="homeSerarchButton">검색</button>
          <button className="homeCreateButton">생성</button>
        </div>
        <div className="rightFetures">
          <button className="homeDeleteButton">삭제</button>
        </div>
      </div>
      <div className="homeBody">
        <div className="memoContent">
          <div className="memoContentLeft">
            <input type="checkbox" />
          </div>
          <div className="memoContentRight">
            <div className="memotitle">테스트 맛집 제목</div>
            <div className="momoDate">테스트 맛집 방문 날짜</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
