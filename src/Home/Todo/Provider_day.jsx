import React,{useContext,createContext,useState,useEffect} from 'react'

const IteamContext = createContext();
const arrIteam_local = localStorage.getItem('arrIteams') ? JSON.parse(localStorage.getItem('arrIteams')) : [];
// console.log(arrIteam_local,'day nhé')
const Provider_day = ({children} ) => {
  const days = [
    "Sunday ",
    "Monday ",
    "Tuesday ",
    "Wednesday ",
    "Thursday ",
    "Friday ",
    "Saturday ",
  ];
 
  const d = new Date();
  const [getday, setGetday] = useState(d.getDay());
  const [getmonth, setGetMonth] = useState(d.getMonth());
  const [getdate, setGetDate] = useState(d.getDate());
  const handleTime_reduce = () => {
    setGetday(getday - 1);
    if (getday-1  < 0) setGetday(6); //quay lại từ đầu
    setGetDate(getdate - 1);
  };
  const handleTime_incre = () => {
    setGetday(getday + 1);
    setGetDate(getdate + 1);
  };
  useEffect(() => {
    if (getdate > 31) {
      setGetMonth(getmonth + 1);
      setGetDate(1);
    }
    if (getdate < 1) {
      setGetMonth(getmonth - 1);
      setGetDate(31);
    }
  }, [getdate]);
  
  return (
    <IteamContext.Provider value={{arrIteam_local,getday,getmonth,getdate,handleTime_incre,handleTime_reduce,days,d}}>
        {children}
    </IteamContext.Provider>
  )
}
// const arrProvider = useContext(dayContext)
export default  Provider_day
export {IteamContext}
