import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');

  const [emailPass, setEmailPass] = useState(false);
  //이름 state 저장
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  //이메일 유효성
  const isEmail = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
  };

  const onEmailChange = (e) => {
    setEmailPass(true);
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (isEmail(email)) {
      setEmail(email);
      setEmailPass(false);
    } else {
      setEmail('');
    }
  }, [name, email, pwd, pwd2]);
  return (
    <div className="signupComponent">
      <div className="signUpTitle">회원가입</div>
      <input
        type="text"
        className="nameInput"
        placeholder="이름"
        onChange={onNameChange}
      />
      <input
        type="text"
        className="signUpEmailInput"
        placeholder="이메일"
        onChange={onEmailChange}
      />
      <div className={`emailCheckText${emailPass}`}>
        이메일 형식이 아닙니다.
      </div>
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
