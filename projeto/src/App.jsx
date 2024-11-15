import {} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './containers/Login/login';
import Home from './containers/Home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
