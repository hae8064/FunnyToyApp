import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <div className="header">Funny Toy App</div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <div className="footerCopyRight">
        CopyRight 2022. Bonghee All rights reserved.
      </div>
    </div>
  );
}

export default App;
