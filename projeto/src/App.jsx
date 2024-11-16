import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './containers/Login/login';
import Home from './containers/Home/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
