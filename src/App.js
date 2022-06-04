import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/formlogin/FormLogin";
import Homeadmin from "./phantrang/Homeadmin";
import Home from "./pages/home/Home";

function App() {
  const [isLogin, setIslogin] = useState(false)

  console.log('usdadsadsadsa', JSON.parse(localStorage.getItem("isLogin")))

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isLogin"))) {
      setIslogin(true)
    } else {
      setIslogin(false)
    }
  })

  const handleSetLogin = (value) => {
    setIslogin(value)
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login handleSetLogin={handleSetLogin} />}></Route>
        </Routes>
        {
          isLogin && <Homeadmin handleSetLogin={handleSetLogin} />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
