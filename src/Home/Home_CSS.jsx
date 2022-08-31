import styled from "styled-components";
export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 66px;
  background-color: #fff;
  padding: 0 130px;
`;
export const S_inforUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .imgUser {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .nameUser {
    margin-left: 13px;
    font-size: 21px;
    font-weight: 700;
    span{
      color: #d52862;
    }
  }
`;
export const S_btnLogOut = styled.button`
  min-width: 122px;
  height: 50px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
  padding: 0 20px;
  font-size: 17px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #a3b2c6;
  transition: all .3s;
  cursor: pointer;
  &:hover{
    background-color: #d06fa4;
    color: white;
  }
  #ImExit{
    font-size: 22px;
  }
  span{
    font-size: 18px;
    font-weight: 600;
  }
`;
export const S_btnGoogle = styled.button`
  
`