import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [loginCheck, setLoginCheck] = useState(true);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPwdChange = (e) => {
    setPwd(e.target.value);
  };

  const onLogin = async () => {
    const client = axios.create(); //axios기능 생성
    const loginDatas = [email, pwd];

    //test 파라미터 id
    const res = await axios.get('/');
    const users = res.data;

    await client.post('/', { loginDatas }).then((res) => {
      console.log('과연 데이터는 ?', res.data);
      const userId = res.data.data.iduser;
      if (res.data !== null) {
        window.location.replace(`/home/:${userId}`);
        setLoginCheck(true);
      } else if (res.data === null) {
        setLoginCheck(false);
      }

      // if (res.data === 'success') {
      //   window.location.replace('/home/{userId}');
      //   setLoginCheck(true);
      // } else if (res.data === 'fail') {
      //   setLoginCheck(false);
      // }
    });
  };

  return (
    <div className="loginComponent">
      <div className="loginTitle">로그인</div>
      <input
        type="text"
        className="loginInput"
        placeholder="이메일을 입력하세요"
        onChange={onEmailChange}
      />
      <input
        type="password"
        className="passwordInput"
        placeholder="비밀번호를 입력하세요"
        onChange={onPwdChange}
      />
      <button className="loginButton" onClick={onLogin}>
        로그인
      </button>
      <div className={`loginCheckText${loginCheck}`}>
        로그인에 실패하였습니다.
      </div>
      <Link to="/signUp" style={{ textDecoration: 'none', color: 'grey' }}>
        <div className="signupText">Email이 없으신가요?</div>
      </Link>
    </div>
  );
};

export default Login;
