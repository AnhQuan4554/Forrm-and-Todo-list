import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiTodoLine } from "react-icons/ri";
import Iteam_todo from "./Iteam_todo";
import { S_Todo, S_buttonDeleAll } from "./S_todo";
import { Todo_day } from "./Todo_day";
import { IteamContext } from "./Provider_day"; // thông tin ngày tháng
import Home_header from "../Home_header";

const Todo = () => {
  const [valueInput, setValueinput] = useState(""); // giá trị nhập vào input
  const [arrIteams_local, setArrteams_local] = useState([]); // mảng chứa các phần tư
  const [arrIteams, setArrteams] = useState(arrIteams_local); // mảng chứa các phần tư
  // thông tin ngày tháng
  const { getdate, getmonth } = useContext(IteamContext);
  //sử lí khi nhập dũ liệu mới
  const handleInput = (e) => {
    setValueinput(e.target.value);
  };

  //thêm phần tử mới vào mảng
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valueInput) {
      toast.error("Can nhap thong tin");
      return;
    }
    const valueInput_new = {
      name: valueInput,
      completed: false,
      time: {
        getdate,
        getmonth,
      },
      id: new Date().getMilliseconds(),
    };

    setArrteams([valueInput_new, ...arrIteams]);
    setValueinput("");

    // console.log(arrIteams)
  };

  //lưu vào local

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(`arrIteams`));
    items ? setArrteams(items) : setArrteams([]);
  }, []);

  useEffect(() => {
    arrIteams.length > 0 &&
      localStorage.setItem("arrIteams", JSON.stringify(arrIteams)); //nếu như chưa có phần tử nào thì mới chạy
    // vì ban đầu xet nó là mảng rỗng nên khi chạy ban đầu nó sẽ set lại local thành mảng rỗng
    // chỉ khi nào nó lơn hơn không tức lúc đấy mảng được đọc từ local rồi mới xét
  }, [arrIteams]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(`arrIteams`));
    setArrteams_local(items);
  }, [arrIteams]);

  /// Kiêm tra xem phần tử đó có được đánh dấu hay không
  const handelChecked = (id) => {
    setArrteams(
      arrIteams.map((iteam) =>
        iteam.id == id ? { ...iteam, completed: !iteam.completed } : iteam
      )
    );
  };

  //xóa phần tử
  const handelDelete = (id) => {
    const checkIteam = arrIteams.find((iteam) => iteam.id == id);

    if (checkIteam && checkIteam.completed == false) {
      toast.error("không thể xóa");
      return;
    }
    if (arrIteams.length <= 1) {
      // console.log("xóa", arrIteams.length);
      localStorage.setItem("arrIteams", JSON.stringify([])); // phải làm sạch localStorage  vì nó sẽ vẫn còn 1 phần từ cuối do điều kiện arrIrtem>0 thì mới đọc của arrItem
      setArrteams_local([]);
      setArrteams([])
      // console.log(arrIteams_local);
    } else {
      setArrteams(arrIteams.filter((iteam) => iteam.id != id));
    }
  };
  // console.log(arrIteams);
  {
    /* start checkall */
  }
  const handleCheckAll_item = () => {
    // const arrCurrently  = arrIteams_local.length > 0 && arrIteams_local.filter(item => item.time.getdate === getdate)
    arrIteams_local.length > 0 && setArrteams(
      arrIteams.map(
        (item) => item.time.getdate === getdate ? { ...item,  completed: !item.completed }  : { ...item,  completed: item.completed } 
      )
    );
  };
  const [checkALl, setCheckALl] = useState(false);
  useEffect(() => {
    const arrChecked = arrIteams.filter((iteam) => iteam.completed == true && iteam.time.getdate == getdate); // các iteam được check trong ngày 
    const arrIteamCurrently = arrIteams.filter((iteam) => iteam.time.getdate == getdate);// các item có trong ngày hôm đó
    arrChecked.length === arrIteamCurrently.length
    ? setCheckALl(true)
    : setCheckALl(false);
    const checkLastItem=  arrIteams.find(item=>item.time.getdate === getdate) // kiểm tra xem còn phần tử nào trong mảng ko do arr mình cho ddieuf kiện lớn hơn 0
    !checkLastItem && setCheckALl(false)
  },[handelChecked]);

  {
    /* end checkall */
  }
  // deleteAll
  const deleteAll  = ()=>{
    checkALl && setArrteams(arrIteams.filter(item=>item.time.getdate!=getdate)) 
  localStorage.setItem("arrIteams", JSON.stringify([])) // cho cái này bằng rỗng để sau khi xóa ở arrLocal thì nó ko bị đọc lại mảng bản đầu nữa
    checkALl && setArrteams_local(arrIteams.filter(item=>item.time.getdate!=getdate)) 

  }
  return (
    <S_Todo>
      <Home_header/>
      <div className="wrap_Todo">
        <Todo_day /> {/* hiện ngày tháng năm  */}
        <form onSubmit={handleSubmit}>
          <input
            className="inputTodo"
            type="text"
            placeholder="Add a task... "
            onChange={handleInput}
            value={valueInput}
          />
          <button className="btnAdd" type="submit">
            ADD
          </button>
          {/* start checkall */}
          <div className="checkALL">
            <input
              id="checkall"
              className="inputCheckAll"
              type="checkbox"
              value="Check All"
              checked={checkALl}
              onChange={ handleCheckAll_item}
            />
            <label for="checkall">
              <span>Check ALL</span>
            </label>
          </div>

          {/* end checkall */}
        </form>
        <div className="display">
          {arrIteams_local &&
            arrIteams_local.map(
              (item, index) =>
                item.time.getdate == getdate && (
                  <Iteam_todo
                    key={item.id}
                    item={item}
                    handelChecked={handelChecked}
                    handelDelete={handelDelete}
                    index={index}
                  />
                )
            )}
        </div>
        <S_buttonDeleAll onClick={deleteAll}>Delete All</S_buttonDeleAll>
      </div>
      <ToastContainer />
    </S_Todo>
  );
};
export default Todo;
