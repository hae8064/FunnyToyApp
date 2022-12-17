import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <div className="header">Funny Toy App</div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <div className="footerCopyRight">
        CopyRight 2022. Bonghee All rights reserved.
      </div>
    </div>
  );
}

export default App;
