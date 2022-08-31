import React, { useState, useEffect, useContext } from "react";
import { cssTransition } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { S_btnGoogle, S_wrapSign_in, S_btnSubmit } from "./S_Sign_in";
import { inforUser } from "../Firebase/UserContext";

const Sign_in = () => {
  const userLocal =localStorage.getItem('userCurrentlt') ? JSON.parse(localStorage.getItem('userCurrentlt')) : '';
  /* sigin with google */
  let navigate = useNavigate();
  const { googleSign, user, logOut } = useContext(inforUser);
  const handleGoogleSignIN = async (e) => {
    e.preventDefault(); // ngăn ko cho nó nộp kết quả
    try {
      await googleSign();
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    user   && navigate("../Home", { replace: true });
   
  },[user])
  useEffect(()=>{
    userLocal   && navigate("../Home", { replace: true });
   
  },[userLocal])

  const defauUser = {
    name: "",
    password: "",
  };

  const [userInfor, setUserInfor] = useState(defauUser);
  ///dọc dữ liệu từ local
  const users = JSON.parse(localStorage.getItem("users"));

  // khi SUB
  const handleSub = (e) => {
    e.preventDefault();
    
    const userCurrentlt = users.find(
      (u) => u.name === userInfor.name && u.password === userInfor.password
    );
    console.log(userCurrentlt);
    if (!userCurrentlt) {
      alert("Tài khoản mật khẩu không tồn tại !!!");
      return;
    }

    //nếu có biến uuser curentlty thì lưu vào local biến userSurent
    userCurrentlt &&
      localStorage.setItem("userCurrentlt", JSON.stringify(userCurrentlt)); //chỉ cần 1 biến vì chỉ có 1 tài khoản đăng nhập được
    userCurrentlt && navigate("../Home", { replace: true });
    setUserInfor(defauUser);
  };

  return (
    <S_wrapSign_in>
      <form onSubmit={handleSub} className="Sign_in">
        <h2
          style={{
            color: "#d91e7f",
            textAlign: " center",
            marginBottom: `16px`,
          }}
        >
          Sign In
        </h2>
        <div className="Sign_in_input">
          <label htmlFor="userInput">
            <p>USERNAME</p>
          </label>
          <input
            onChange={(e) =>
              setUserInfor({ ...userInfor, name: e.target.value })
            }
            value={userInfor.name}
            type="text"
            name="userInput"
            id="userInput"
          />
        </div>
        <div className="Sign_in_input">
          <label htmlFor="password">
            <p>PASSWORD</p>
          </label>
          <input
            onChange={(e) =>
              setUserInfor({ ...userInfor, password: e.target.value })
            }
            value={userInfor.password}
            type="text"
            name="password"
            id="password"
          />
        </div>

        <S_btnSubmit type="submit">Đăng nhập</S_btnSubmit>
        <S_btnGoogle
          onClick={(e) => {
            handleGoogleSignIN(e);
          }}
        >
          <FcGoogle style={{ fontSize: `20px` }} />
          <span>Đăng nhập bằng Google</span>{" "}
        </S_btnGoogle>
        <div className="linkResgiter">
          <Link to="/Register">Đăng kí </Link>
        </div>
      </form>
     
    </S_wrapSign_in>
  );
};

export default Sign_in;
