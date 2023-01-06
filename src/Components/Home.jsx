import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Home.css';

const Home = ({ props }) => {
  const [memo, setMemo] = useState(0);
  const location = useLocation();
  const memoData = location.state;
  console.log(memoData);
  return (
    <div className="homeComponent">
      <div className="homeTop">
        <div className="leftFetures">
          <button className="homeSerarchButton">검색</button>
          <Link to="/home/create">
            <button className="homeCreateButton">생성</button>
          </Link>
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
