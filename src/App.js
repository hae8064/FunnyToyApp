import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Create from './Components/Create';
import MemoDetail from './Components/MemoDetail';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './styles/navbar.module.scss';
import Menu from './Components/Menu';

function App() {
  const [showButton, setShowButton] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <div className="headerIcon">
          {showButton && (
            <GiHamburgerMenu
              onClick={() => {
                setShowMenu(true);
              }}
            />
          )}
        </div>
        <CSSTransition
          in={showMenu}
          timeout={300}
          classNames={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.exit,
            exitActive: styles.exitActive,
          }}
          unmountOnExit
        >
          <div>
            <Menu setShowMenu={setShowMenu} />
          </div>
        </CSSTransition>
        <div className="headerTitle">나만의 맛집</div>
      </div>

      {/* {showButton && (
       
      )} */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/home/:id/create" element={<Create />} />
        <Route path="/home/:id/detail/:id" element={<MemoDetail />} />
      </Routes>
      <div className="footerCopyRight">
        CopyRight 2022. Bonghee All rights reserved.
      </div>
    </div>
  );
}

export default App;
