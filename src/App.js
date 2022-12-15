import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <div className="header">Funny Toy App</div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
