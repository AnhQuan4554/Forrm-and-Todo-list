/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

import axios from "axios";

import { S_wrapSign_in, S_btnSubmit, S_Wrapbtn } from "./S_Sign_in";
import { getUser } from "../redux/slice/user";

const Sign_in = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("user", user);
  console.log("profile", profile);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    if (user) {
      console.log("object22");
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log("res.data++", res.data);
          setProfile(res.data);
          if (res.data) {
            toast.success("Login Success!", {
              position: toast.POSITION.TOP_RIGHT,
            });
            //
            dispatch(getUser(res.data));
            //
            navigate("/Home");
          }
        })
        .catch((err) => {
          toast.error("Login Error!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log("error", err);
        });
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  const handleSubWithoutGoogle = () => {};
  return (
    <S_wrapSign_in>
      <div className="Sign_in">
        <form onSubmit={handleSubWithoutGoogle}>
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
            <input type="text" name="userInput" id="userInput" />
          </div>
          <div className="Sign_in_input">
            <label htmlFor="password">
              <p>PASSWORD</p>
            </label>
            <input type="text" name="password" id="password" />
          </div>
          <S_Wrapbtn>
            <S_btnSubmit>Sign in</S_btnSubmit>
          </S_Wrapbtn>
        </form>
        <S_Wrapbtn>
          <S_btnSubmit style={{ width: "unset" }} onClick={login}>
            Sign in with Google 🚀{" "}
          </S_btnSubmit>
        </S_Wrapbtn>
        <S_Wrapbtn>
          <div className="linkResgiter">
            <Link to="/Register">Đăng kí </Link>
          </div>
        </S_Wrapbtn>
      </div>
      <ToastContainer />
    </S_wrapSign_in>
  );
};

export default Sign_in;
