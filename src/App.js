import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Profile from './components/Profile';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="user/profile" element={<Profile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
