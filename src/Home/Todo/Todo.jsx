import React,{useState,useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import{RiTodoLine}from 'react-icons/ri';
import Iteam_todo from "./Iteam_todo";
import{S_Todo} from "./S_todo"
import { Todo_day } from "./Todo_day";
const Todo = () => {
  const [arrIteams, setArrteams] = useState([]); // mảng chứa các phần tư
  const [valueInput, setValueinput] = useState(""); // giá trị nhập vào input
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
      id: new Date(),
    };

    setArrteams([valueInput_new, ...arrIteams]);
    setValueinput("");
    // console.log(arrIteams)
  };

  /// Kiêm tra xem phần tử đó có được đánh dấu hay không
  const handelChecked = (id) => {
   
    // console.log(id);
    setArrteams(
      arrIteams.map((iteam) =>
        iteam.id === id ? { ...iteam, completed: !iteam.completed } : iteam
      )
    );
  };
  //xóa phần tử
  const handelDelete = (id) => {
    const checkIteam = arrIteams.find((iteam) => iteam.id === id);

    if (checkIteam.completed == false) {
      toast.error("không thể xóa");
      return;
    }

    setArrteams(arrIteams.filter((iteam) => iteam.id != id));
  };
  console.log(arrIteams);
  return (
    <S_Todo>
      <div className="wrap_Todo">
        {/* <h1>
          <span>TODO</span> <RiTodoLine />
        </h1> */}
        <Todo_day/>
        <form onSubmit={handleSubmit}>
          <input className="inputTodo"
            type="text"
            placeholder="Add a task... "
            onChange={handleInput}
            value={valueInput}
          />
          <button type="submit">ADD</button>
        </form>
        <div className="display">
          {arrIteams.map((iteam, index) => (
            <Iteam_todo
              key={iteam.name}
              iteam={iteam}
              handelChecked={handelChecked}
              handelDelete={handelDelete}
            />
          ))}
        </div>
      </div>
      <ToastContainer />

    </S_Todo>
  );
};

export default Todo;
