import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import '../styles/MemoDetail.css';
const MemoDetail = () => {
  const currentLocation = useLocation();
  const [currentStar, setCurrentStar] = useState(currentLocation.state.score);
  const stars = [1, 2, 3, 4, 5];
  //useRffect 사용해서 처음 렌더링 될 때, setCurrentStar점수를 홈 화면에서 가져온 데이터 넣기

  const [title, setTitle] = useState(currentLocation.state.title);
  const [content, setContent] = useState(currentLocation.state.content);
  const location = currentLocation.state.location;
  const [updateActive, setUdateActive] = useState(false);

  const navigate = useNavigate();

  //수정 버튼 클릭이벤트
  const onUpdateDetail = () => {
    console.log(currentLocation.pathname);
    axios
      .patch(currentLocation.pathname, {
        title: title,
        content: content,
        score: currentStar,
      })
      .then((res) => {
        if (res.data === '수정 성공') {
          navigate();
        }
      });
  };

  const onTextChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="memoDetailComponent">
      <div className="memoDetailDelecious">맛집 기록</div>
      <div className="memoDetailBody">
        <div className="memoDetailBodyHeader">
          <input
            type="text"
            value={title}
            className="memoBodyHeaderTitleValue"
            onChange={onTextChange}
          />
        </div>
        <textarea
          type="textarea"
          className="memoDetailContent"
          value={content}
          onChange={onContentChange}
        ></textarea>
        <div className="memoDetailStars">
          {stars.map((star, idx) => (
            <span
              className="star_icon"
              key={idx}
              id={star}
              onClick={() => {
                setCurrentStar(star);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="39"
                viewBox="0 0 14 13"
              >
                <path
                  id="star"
                  d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                  transform="translate(-2 -2)"
                  fill={star <= currentStar ? '#FFD400' : 'grey'}
                />
              </svg>
            </span>
          ))}
        </div>
        <div className="memoDetailLocation">
          <div className="memoDetailLocationText">{location}</div>
        </div>
        <div className="memoDetailCreateInput">
          <img src="" alt="이미지사진" />
        </div>

        <div className="memoDetailBottom">
          <button className="memoDetailUpdate" onClick={onUpdateDetail}>
            수정
          </button>
          <Link to={`/home/${currentLocation.pathname.split('/')[2]}`}>
            <button className="memoDetailCheck">확인</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemoDetail;
