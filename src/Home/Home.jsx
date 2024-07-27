import React from "react";
import Todo from "./Todo/Todo";
import { ToastContainer } from "react-toastify";
const Home = () => {
  return (
    <div>
      <Todo />
      <ToastContainer />
    </div>
  );
};

export default Home;
