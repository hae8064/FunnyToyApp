import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signupComponent">
      <div className="signUpTitle">회원가입</div>
      <input type="text" className="nameInput" placeholder="이름" />
      <input type="text" className="signUpEmailInput" placeholder="이메일" />
      <input type="password" className="passwordInput" placeholder="비밀번호" />
      <input
        type="password"
        className="passwordInput2"
        placeholder="비밀번호 확인"
      />
      <button className="signUpButton">회원가입</button>
      <Link to="/" style={{ textDecoration: 'none', color: 'grey' }}>
        <div className="signInText">이미 가입된 Email이 있으신가요?</div>
      </Link>
    </div>
  );
};

export default SignUp;
