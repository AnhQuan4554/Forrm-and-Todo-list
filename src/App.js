import React from "react";
import Register from "./Register/Register";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Routes, Route } from "react-router-dom";
import Sign_in from "./Sign_in/Sign_in";
import Home from "./Home/Home";
import MyTable from "./Record";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sign_in />}>
          {" "}
        </Route>
        <Route path="/Register" element={<Register />}>
          {" "}
        </Route>
        <Route path="/Home" element={<Home />}>
          {" "}
        </Route>
        <Route path="/list-record" element={<MyTable />}>
          {" "}
        </Route>
      </Routes>
    </>
  );
};

export default App;
