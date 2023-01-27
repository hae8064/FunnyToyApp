import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import moment from 'moment-timezone';
import 'moment/locale/ko'; //대한민국
import { FaSearch } from 'react-icons/fa';

const Home = ({ props }) => {
  const [memo, setMemo] = useState([]);
  const location = useLocation();
  const memoData = location.state;
  const navigate = useNavigate();
  const [deleteMemo, setDeleteMemo] = useState([]);
  const [searchInputView, setSearchInputView] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  //제목으로 검색 했을 때 데이터 출력을 위한 filter함수
  let filtered = memo.filter((data) => {
    return data.boardTitle
      .replace(/(\s*)/g, '')
      .toLowerCase()
      .includes(searchValue.replace(/(\s*)/g, '').toLowerCase());
  });

  useEffect(() => {
    axios.get(`${location.pathname}}`).then((response) => {
      setMemo(response.data.reverse(), ...memo);
    });
  }, []);

  // useEffect(() => {
  //   console.log(searchValue.replace(/(\s*)/g, ''));
  // }, [searchValue]);

  const onCheckBoxButton = (e, data, idx) => {
    //체크가 활성화 되었을때
    if (e) {
      // setDeleteMemo(...deleteMemo, data.boardId);
      deleteMemo.push(data.boardId);
    } else {
      console.log('삭제');
      setDeleteMemo(
        deleteMemo.filter((element) => element !== data.boardId),
        ...deleteMemo
      );
    }

    console.log(e, data, idx);
  };

  //삭제 버튼
  const onDeleteButton = (data) => {
    console.log(deleteMemo);
    axios
      .delete('/home/delete', {
        data: {
          boardId: deleteMemo,
        },
      })
      .then((res) => {
        setDeleteMemo(
          deleteMemo.filter((element) => element !== data.boardId),
          ...deleteMemo
        );
        // window.location.replace(location.pathname);
      });

    if (deleteMemo.length >= 1) {
      window.location.reload();
    }
  };

  //검색 버튼 클릭 이벤트
  const onSearchClick = () => {
    console.log(location.pathname);
    setSearchInputView(!searchInputView);
  };

  //검색 버튼 onChange이벤트
  const onSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="homeComponent">
      <div className="homeTop">
        <div className="leftFetures">
          <button className="homeSerarchButton" onClick={onSearchClick}>
            검색
          </button>
          <Link to={`${location.pathname}/create`}>
            <button className="homeCreateButton">생성</button>
          </Link>
        </div>
        <div className="rightFetures">
          <button className="homeDeleteButton" onClick={onDeleteButton}>
            삭제
          </button>
        </div>
      </div>
      <div className={`inputSearch` + searchInputView}>
        <FaSearch />
        <input
          type="text"
          placeholder="검색"
          className="inputSearchInput"
          onChange={onSearchInput}
        />
      </div>

      {filtered.length > 0 ? (
        <div className="homeBody">
          {filtered.map((data, idx) => (
            <div key={idx} className="memoContent">
              <div className="memoContentLeft">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    onCheckBoxButton(e.target.checked, data, idx);
                  }}
                />
              </div>
              <div
                className="memoContentRight"
                onClick={() => {
                  navigate(`${location.pathname}/detail/${data.boardId}`, {
                    state: {
                      title: data.boardTitle,
                      content: data.boardContent,
                      score: data.boardScore,
                      location: data.boardLocation,
                    },
                  });
                }}
              >
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
      ) : (
        <div className="homeBody">
          {memo.map((data, idx) => (
            <div key={idx} className="memoContent">
              <div className="memoContentLeft">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    onCheckBoxButton(e.target.checked, data, idx);
                  }}
                />
              </div>
              <div
                className="memoContentRight"
                onClick={() => {
                  navigate(`${location.pathname}/detail/${data.boardId}`, {
                    state: {
                      title: data.boardTitle,
                      content: data.boardContent,
                      score: data.boardScore,
                      location: data.boardLocation,
                    },
                  });
                }}
              >
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
      )}

      {/* <div className="homeBody">
        {memo.map((data, idx) => (
          <div key={idx} className="memoContent">
            <div className="memoContentLeft">
              <input
                type="checkbox"
                onChange={(e) => {
                  onCheckBoxButton(e.target.checked, data, idx);
                }}
              />
            </div>
            <div
              className="memoContentRight"
              onClick={() => {
                navigate(`${location.pathname}/detail/${data.boardId}`, {
                  state: {
                    title: data.boardTitle,
                    content: data.boardContent,
                    score: data.boardScore,
                    location: data.boardLocation,
                  },
                });
              }}
            >
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
      </div> */}
    </div>
  );
};

export default Home;
