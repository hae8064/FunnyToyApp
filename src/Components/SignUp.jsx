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

  const [emailPass, setEmailPass] = useState(true);
  const [pwdPass, setPwdPass] = useState(true);
  const [pwd2Pass, setPwd2Pass] = useState(true);
  const [signPass, setSignPass] = useState(true);

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

  //비밀번호 유효성 (숫자+영문자+특수문자 포함 8자리 이상)
  const isPassword = (pwd) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    return passwordRegex.test(pwd);
  };

  const onEmailChange = (e) => {
    setEmailPass(false);
    setEmail(e.target.value);
  };

  const onPwdChange = (e) => {
    setPwd(e.target.value);
    setPwdPass(false);
  };

  const onPwd2Change = (e) => {
    setPwd2(e.target.value);
    setPwd2Pass(false);
  };

  const onSignUpButton = () => {
    if (
      pwdPass === true &&
      pwd2Pass === true &&
      emailPass === true &&
      email !== '' &&
      pwd !== '' &&
      pwd2 !== ''
    ) {
      console.log('회원가입  성공!');
      setSignPass(true);
    } else {
      setSignPass(false);
    }
  };

  useEffect(() => {
    if (isEmail(email)) {
      setEmail(email);
      setEmailPass(true);
    } else {
      setEmail('');
    }
    if (isPassword(pwd)) {
      setPwd(pwd);
      setPwdPass(true);
    } else {
      setPwd('');
    }
    if (pwd === pwd2) {
      setPwd2Pass(true);
    } else {
      setPwd2('');
      setPwd2Pass(false);
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
      <input
        type="password"
        className="passwordInput"
        placeholder="비밀번호"
        onChange={onPwdChange}
      />
      <div className={`pwdCheckText${pwdPass}`}>
        숫자+영문자+특수문자 포함 8자리 이상 입력해주세요.
      </div>
      <input
        type="password"
        className="passwordInput2"
        placeholder="비밀번호 확인"
        onChange={onPwd2Change}
      />
      <div className={`pwd2CheckText${pwd2Pass}`}>
        비밀번호가 일치하지 않습니다.
      </div>
      <button className="signUpButton" onClick={onSignUpButton}>
        회원가입
      </button>
      <div className={`signCheckText${signPass}`}>
        회원가입에 실패하였습니다.
      </div>
      <Link to="/" style={{ textDecoration: 'none', color: 'grey' }}>
        <div className="signInText">이미 가입된 Email이 있으신가요?</div>
      </Link>
    </div>
  );
};

export default SignUp;
