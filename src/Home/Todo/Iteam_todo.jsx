import React, { useState } from "react";
import { toast } from "react-toastify";
import { S_wrapIteam } from "./S_todo";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import { ArrProvider } from "./Provider_day";
import { Form, Input } from "antd";
import { useEffect } from "react";
const Iteam_todo = ({ item, handelChecked, handelDelete, index }) => {
  const [value, setvalue] = useState(""); // value của iteam
  useEffect(() => {
    setvalue(item.name);
  }, []);
  const [isEdit, setIsEdit] = useState(true);
  const inputValues = document.querySelectorAll(".inputValue");
  const FiEdit3s = document.querySelectorAll(".iconEdit");

  // const [colorIconEdit, setColorIconEdit] = useState('black')
  // inputValues && console.log(inputValues[0].disabled);
  const handleEditInput = (e) => {
    // console.log(inputValues[0].className);
    inputValues.forEach((i) => (i.disabled = true));
    Array.from(FiEdit3s).forEach((i) => (i.style.color = "black"));

    const inputEdit = Array.from(inputValues).find((i) =>
      i.classList.contains(e.currentTarget.id)
    );
    if (inputEdit) inputEdit.disabled = false; // tìm ra phần tử chỉnh sửa

    // chỉnh màu cho icon pen
    const iconEdit = Array.from(FiEdit3s).find(
      (i) => i.id == e.currentTarget.id
    );
    if (iconEdit) iconEdit.style.color = "pink";
  };
  // khi blue ra ngoài input
  const handleBlue = () => {
    inputValues.forEach((i) => (i.disabled = true));
    Array.from(FiEdit3s).forEach((i) => (i.style.color = "black"));
  };

  return (
    <S_wrapIteam className="wrapIteam">
      <div className="left" style={{ opacity: item.completed && 1 }}>
        <div className="checkBox">
          <input
            className="inputCheckBox"
            id={`inputCheckBox${index}`}
            type="checkbox"
            value={item}
            checked={item.completed}
            onChange={(e) => handelChecked(item.id)}
            name="checkbox"
          />
          <label htmlFor={`inputCheckBox${index}`}></label>
        </div>

        <span style={{ textDecorationLine: item.completed && "line-through" }}>
          <input
            disabled={true}
            // id="inputValue"
            id={index}
            className={` inputValue  ${item.id}`}
            type="text"
            onChange={(e) => {
              setvalue(e.target.value);
            }}
            onBlur={handleBlue}
            value={value}
          />
        </span>
      </div>
      <div className="right">
        <label htmlFor={`${index}`}>
          <FiEdit3
            className="iconEdit"
            id={item.id}
            fontSize="22px"
            onClick={(e) => {
              handleEditInput(e);
            }}
          />
        </label>
        <RiDeleteBin6Line
          fontSize="22px"
          onClick={() => handelDelete(item.id)}
          style={{
            opacity: item.completed === false && 0.3,
            color: item.completed && "red",
            cursor: "pointer",
          }}
        />
      </div>
    </S_wrapIteam>
  );
};

export default Iteam_todo;
