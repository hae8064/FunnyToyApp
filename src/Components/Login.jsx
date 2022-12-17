import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
  return (
    <div className="loginComponent">
      <div className="loginTitle">로그인</div>
      <input
        type="text"
        className="loginInput"
        placeholder="이메일을 입력하세요"
      />
      <input
        type="password"
        className="passwordInput"
        placeholder="비밀번호를 입력하세요"
      />
      <button className="loginButton">로그인</button>
      <Link to="/signUp" style={{ textDecoration: 'none', color: 'grey' }}>
        <div className="signupText">Email이 없으신가요?</div>
      </Link>
    </div>
  );
};

export default Login;
