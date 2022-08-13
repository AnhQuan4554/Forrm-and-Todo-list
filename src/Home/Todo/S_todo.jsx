import styled from "styled-components";
export const S_Todo = styled.div`
  background-color: #e55c8a;
  min-height: 100vh;
  position: relative;
  display: flex;
  .wrap_Todo {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    background-color: #3c424a;
    min-height: 60vh;
    min-width: 40vw;
    padding: 30px;
    border-radius: 10px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    /* min-height: 540px; */
    .inputTodo {
      border-radius: 5px;
      width: 81%;
      height: 36px;
      font-size: 18px;
      background: #343a40;
      /* border: none; */
      border: 1px solid #121416;
      padding: 0 20px;
      outline: none;
      caret-color: #fff;
    }
    button {
      outline: none;
      width: 62px;
      height: 32px;
      border-radius: 8px;
      border: none;
      background: pink;
      margin-left: 20px;
    }
    h1 {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .display {
      margin-top: 20px;
      background-color: #fff;
      border-radius: 6px;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;
export const S_wrapIteam = styled.div`
  margin: 5px 0 5px 0;
  border-bottom: solid 2px rgb(194, 16, 16);
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:last-child {
    border: none;
  }
  .left {
    display: flex;
    align-items: center;
  }
  .left input {
    width: 18px;
    height: 18px;
    margin-right: 8px;
  }
`;
export const S_theDay = styled.div`
  width: 100%;
  text-align: center;
  margin-top: -10px;
  position: relative;
  .icon {
    font-size: 50px;
    cursor: pointer;
    color: #fff;
    position: absolute;
    &:hover{
        color: #dfb6bd;
    }
    &:nth-child(1){
      top: 25%;
      left: 20%;
    }
    &:nth-child(2){
      top: 25%;
      right: 20%;
    }
  }

  .day {
    text-align: center;
    color: #fff;
    font-size: 40px;
    -moz-user-select: none;
    -webkit-user-select:none;
    -ms-user-select: none;
    user-select: none;
    /* display: block; */
  }

  .otherTime {
    display: flex;
    align-items: center;
    justify-content: center;
    .otherTime_item {
      display: block;
      margin-left: 10px;
      font-size: 20px;
      color: #8b929b;
      // ko cho bôi đen
      -moz-user-select: none;
    -webkit-user-select:none;
    -ms-user-select: none;
    user-select: none;
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;
