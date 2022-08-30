import React from 'react'
import {
 Link
} from "react-router-dom";
import {Nav,S_inforUser,S_btnLogOut} from'./Home_CSS'
const Home_header = () => {
  return (
    <Nav>
      {/* <Link to="/">Sign_in</Link>
      <Link to="/Register">Register</Link> */}
      <S_inforUser >
        <div className="imgUser">
          <img src="http://hanoimoi.com.vn/Uploads/tuandiep/2018/4/8/1(1).jpg" alt="" />
        </div>
        <div className="nameUser">Xin chào Nguyễn Anh Quân</div>
      </S_inforUser>
      <S_btnLogOut >
        Log Out
      </S_btnLogOut>
    </Nav>
  )
}

export default Home_header
