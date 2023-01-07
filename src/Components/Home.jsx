import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import moment from 'moment-timezone';
import 'moment/locale/ko'; //대한민국

const Home = ({ props }) => {
  const [memo, setMemo] = useState([]);
  const location = useLocation();
  const memoData = location.state;
  const navigate = useNavigate();
  // console.log(location.state);

  useEffect(() => {
    axios.get(`${location.pathname}}`).then((response) => {
      setMemo(response.data, ...memo);
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
          <div
            key={idx}
            className="memoContent"
            onClick={() => {
              navigate(`${location.pathname}/detail/${data.boardId}`);
              console.log(data);
            }}
          >
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
