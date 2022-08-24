import React, { useState } from "react";
import { toast } from "react-toastify";
import { S_wrapIteam } from "./S_todo";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ArrProvider } from "./Provider_day";
import { Form , Input} from "antd";
import { useEffect } from "react";
const Iteam_todo = ({ item, handelChecked, handelDelete }) => {
  const [value, setvalue] = useState('')
  useEffect(()=>{
    setvalue(item.name)
  },[])
  return (
    <S_wrapIteam  className="wrapIteam">
      <div className="left" style={{ opacity: item.completed && 0.3 }}>
        <input
          type="checkbox"
          value={item}
          checked={item.completed}
          onChange={(e) => handelChecked(item.id)}
         
          name="checkbox"
        />

        <span style={{ textDecorationLine: item.completed && "line-through" }}>
        
          <input
          disabled={false}
          id="inputValue"
            type="text"
            onChange={e=>{setvalue(e.target.value)}}
            value={value}
          />
          {/* {item.name} */}
        </span>
      </div>
      <div className="righ">
        <RiDeleteBin6Line
          fontSize="22px"
          onClick={() => handelDelete(item.id)}
          style={{ opacity: item.completed === false && 0.3 }}
        />
      </div>
    </S_wrapIteam>
  );
};

export default Iteam_todo;
