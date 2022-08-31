import styled from "styled-components";
import { Form, Input } from "antd";

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
    @media screen and (max-width: 768px) {
      min-width: 76vw;
    }
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
      color: #fff;
      caret-color: #fff;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .btnAdd {
      outline: none;
      width: 62px;
      height: 32px;
      border-radius: 14px;
      border: none;
      background: pink;
      margin-left: 20px;
      font-size: 20px;
      font-weight: 700;
      color: #222324;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-top: 22px;
      }
    }
    .checkALL {
      margin-top: 10px;
      margin-bottom: -10px;
      display: flex;
      align-items: center;

      .inputCheckAll {
        width: 24px;
        height: 24px;
        border: 10px solid pink;
      }
      span {
        font-size: 19px;
        color: pink;
        margin-left: 10px;
        font-weight: 700;
      }
      @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        .inputCheckAll {
          display: none;
          width: 100%;
          &:checked + label {
            span {
              display: block;
              background-color: red;
            }
          }
        }
        label {
          width: 100%;
          span {
            background: #343a40;
            display: block;
            width: 100%;
            margin-left: 0;
            border-radius: 15px;
          }
        }
      }
    }
    h1 {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .display {
      margin-top: 20px;
      margin-bottom: 16px;
      background-color: #fff;
      border-radius: 6px;
      padding-left: 10px;
      padding-right: 10px;
      @media screen and (max-width: 768px) {
        max-height: 195px;
        overflow-y: auto;
        margin-bottom: 64px;
      }
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
    width: 80%;
    display: flex;
    align-items: center;
    .checkBox {
      position: relative;
      width: 18px;
      height: 18px;
      margin-right: 8px;
      .inputCheckBox {
        display: none;
        &:checked + label:after {
          opacity: 1;
          border: 1px solid red;

          border-top: none;
          border-right: none;
        }
      }
      label {
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        border-radius: 2px;
        background-color: #8894a4;
        border: 1px solid #32373d;
        cursor: pointer;
        &:after {
          content: "";
          width: 10px;
          height: 6px;
          position: absolute;
          top: 4px;
          left: 4px;
          border: 3px solid #fff;
          border-top: none;
          border-right: none;
          background: transparent;
          opacity: 0;
          transform: rotate(-45deg);
        }
        &:hover::after {
          opacity: 0.5;
        }
      }
    }
    .inputValue {
      border: none;
      outline: none;
      padding-left: 10px;
      font-size: 18px;
      font-weight: 500;
      &:enabled {
        width: 100%;
        color: #423838;
      }
      &:disabled {
        width: 100%;
      }
      span {
        width: 100%;
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .iconEdit {
      margin-top: 5px;
      cursor: pointer;
      margin-left: 30px;
      &:hover {
        color: pink;
      }
      @media screen and (max-width: 768px) {
        margin-left: 0;
      }
      @media screen and (max-width: 576px) {
        margin-left: 0;
      }
    }
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
    &:hover {
      color: #dfb6bd;
    }
    &:nth-child(1) {
      top: 25%;
      left: 20%;
    }
    &:nth-child(2) {
      top: 25%;
      right: 20%;
    }
    @media screen and (max-width: 768px) {
      &:nth-child(1) {
        top: 25%;
        left: 24%;
      }
      &:nth-child(2) {
        top: 25%;
        right: 24%;
      }
    }
    @media screen and (max-width: 576px) {
   
      &:nth-child(1) {
        top: 15%;
        left: 0%;
      }
      &:nth-child(2) {
        top: 15%;
        right: 0%;
      }
    }
  }

  .day {
    text-align: center;
    color: #fff;
    font-size: 40px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* display: block; */
    @media screen and (max-width: 768px) {
      font-size: 36px;
    }
    @media screen and (max-width: 576px) {
      font-size: 26px;

    }
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
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;
export const S_buttonDeleAll = styled.button`
  outline: none;
  position: absolute;
  bottom: 10px;
  left: 20px;
  width: 100px;
  font-size: 17px;
  color: #1d2024;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  background: pink;
  opacity: 0.6;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
  @media only screen and (max-width: 768px) {
    width: 100px;
    height: 50px;
    border-radius: 20px;
  }
`;
///////////////////////////  RESPONSIVE
// &:checked + label:after
