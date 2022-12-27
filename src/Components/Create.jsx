import React from 'react';
import './Create.css';

const Create = () => {
  return (
    <div className="createComponent">
      <div className="createDelecious">맛집 생성페이지</div>
      <div className="createBody">
        <div className="createBodyHeader">
          <span className="titleHeader">제목:</span>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Create;
