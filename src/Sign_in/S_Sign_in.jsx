import styled from "styled-components";
export const S_wrapSign_in = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(192, 183, 183);
  .Sign_in {
    /* display: flex; */

    min-height: 450px;
    margin: auto;
    width: 400px;
    padding: 50px 0;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    .Sign_in_input {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      color: #666;
      margin-bottom: 25px;
      input {
        outline: none;
        border: none;
        border-bottom: 2px solid #888;
        font-size: 15px;
        padding: 5px;
        background-color: #fff;
      }
    }
  }
  .linkResgiter {
    padding: 4px 20px;
    color: #fa0785;
    border: 1px solid red;
    border-radius: 20px;
    transition: all 0.2s;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    a {
      color: #000;
    }
    &:hover {
      background-color: pink;
      a {
        color: #fff;
      }
    }
  }
`;
export const S_btnSubmit = styled.button`
  min-width: 250px;
  height: 42px;
  cursor: pointer;
  border: none;
  border-radius: 26px;
  font-size: 18px;
  color: #fff;
  background: #c83c85;
  transition: all 0.3s;
  opacity: 0.9;
  margin-bottom: 30px;
  &:hover {
    opacity: 1;
  }
`;

export const S_Wrapbtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
