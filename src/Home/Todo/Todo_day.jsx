import React,{useState,useEffect} from 'react'
import{S_theDay} from"./S_todo"
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs';
export const Todo_day = () => {
    const days = ['Monday ','Tuesday ','Wednesday ','Thursday ','Friday ','Saturday ','Sunday ']
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d= new Date();
    const [getday, setGetday] = useState(d.getDay())
    const [getmonth, setGetMonth] = useState(d.getMonth())
    const [getdate, setGetDate] = useState(d.getDate())
  const handleTime_reduce= ()=>{
    setGetday(getday-1)
    setGetDate(getdate-1)
  }
  const handleTime_incre = ()=>{
    setGetday(getday+1)
    setGetDate(getdate+1)
  }
    useEffect(()=>{
        if(getdate>31){
            setGetMonth(getmonth+1)
            setGetDate(1)
        }
        if(getdate<1){
            setGetMonth(getmonth-1)
            setGetDate(31)
        }
    },[getdate])
  return (
    <S_theDay>
        <BsChevronCompactLeft onClick={e=>{handleTime_reduce()}} className='icon' />
        <BsChevronCompactRight onClick={e=>{handleTime_incre()}} className='icon'  />
        <span className="day">{getday-1 <7 ? days[getday-1] : days[(getday-1)%7]}</span>
       
        <div className="otherTime">
            <span className="otherTime_item">{getmonth+1} /</span>
            <span className="otherTime_item" >{getdate} /</span>
            <span className="otherTime_item">{d.getFullYear()} </span>
        </div>
    </S_theDay>
  )
}
