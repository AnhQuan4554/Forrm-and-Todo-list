import React,{useContext, useEffect} from 'react'
import {
 Link
} from "react-router-dom";
import {Nav,S_inforUser,S_btnLogOut} from'./Home_CSS'
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import {inforUser} from '../Firebase/UserContext'

const Home_header = () => {
  const {logOut,user} = useContext(inforUser)
  const userLocal =localStorage.getItem('userCurrentlt') ? JSON.parse(localStorage.getItem('userCurrentlt')) : '';
  let navigate = useNavigate();
  const exitTodo = async () => {
    try {
      await logOut();
 
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem('userCurrentlt') // remove tài khoản dăng nhập bình thường 
  };
  // Exit todo
  console.log(userLocal)
  useEffect(()=>{
    
    if(user || userLocal ){
      navigate("../Home", { replace: true });
    }
    else{
      navigate("../", { replace: true });
    }

  },[user,userLocal])

  return (
    <Nav>
      {/* <Link to="/">Sign_in</Link>
      <Link to="/Register">Register</Link> */}
      <S_inforUser >
        <div className="imgUser">
          <img src={user ? user.photoURL : `https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg`} alt="" />
        </div>
        <div className="nameUser">Xin chào <span>{user ? user.displayName : userLocal.name}</span></div>
      </S_inforUser>
      <S_btnLogOut onClick={exitTodo} >
        <ImExit   id='ImExit'  />
       <span>Thoát</span>
      </S_btnLogOut>
    </Nav>
  )
}

export default Home_header
