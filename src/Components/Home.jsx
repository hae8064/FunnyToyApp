import React from 'react';
import './Home.css';

const Home = () => {
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
    </div>
  );
};

export default Home;
