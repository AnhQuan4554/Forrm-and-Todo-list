import React, { useState, useEffect, createContext, useContext } from "react";
import { S_theDay } from "./S_todo";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { IteamContext } from "./Provider_day";
const timeContext = createContext();
export const Todo_day = () => {
  const {
    d,
    days,
    handleTime_reduce,
    handleTime_incre,
    getday,
    getdate,
    getmonth,
  } = useContext(IteamContext);
  return (
    <S_theDay>
      <BsChevronCompactLeft
        onClick={(e) => {
          handleTime_reduce();
        }}
        className="icon"
      />
      <BsChevronCompactRight
        onClick={(e) => {
          handleTime_incre();
        }}
        className="icon"
      />
      <span className="day">
        {getday < 7 ? days[getday] : days[getday % 7]}
      </span>

      <div className="otherTime">
        <span className="otherTime_item">{getmonth + 1} /</span>
        <span className="otherTime_item">{getdate} /</span>
        <span className="otherTime_item">{d.getFullYear()} </span>
      </div>
    </S_theDay>
  );
};
