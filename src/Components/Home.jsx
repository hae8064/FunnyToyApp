import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Home.css';
import moment from 'moment-timezone';
import 'moment/locale/ko'; //대한민국

const Home = ({ props }) => {
  const [memo, setMemo] = useState([]);
  const location = useLocation();
  const memoData = location.state;
  // console.log(location.state);

  useEffect(() => {
    axios.get(`${location.pathname}}`).then((response) => {
      setMemo(response.data, ...memo);
      // console.log(response);
      console.log(memo);
    });
  }, []);

  return (
    <div className="homeComponent">
      <div className="homeTop">
        <div className="leftFetures">
          <button className="homeSerarchButton">검색</button>
          <Link to={`${location.pathname}/create`}>
            <button className="homeCreateButton">생성</button>
          </Link>
        </div>
        <div className="rightFetures">
          <button className="homeDeleteButton">삭제</button>
        </div>
      </div>
      <div className="homeBody">
        {memo.map((data, idx) => (
          <div key={idx} className="memoContent">
            <div className="memoContentLeft">
              <input type="checkbox" />
            </div>
            <div className="memoContentRight">
              <div className="memotitle">{data.boardTitle}</div>
              <div className="memoDate">
                {moment(data.boardCreated)
                  .subtract(9, 'hour')
                  .tz('Asia/Seoul')
                  .format('YYYY-MM-DD HH:mm')}
                {/* {moment(data.boardCreated).format('YYYY-MM-DD HH:mm')} */}
              </div>
            </div>
          </div>
        ))}
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
