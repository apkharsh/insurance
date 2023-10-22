import Register from './Component/Register/Register';
 import Login from './Component/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import { Policy } from './Component/Policy/Policy';

function App() {
  return (
    <div className="App">
<BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/policy/:type" element={<Policy />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
