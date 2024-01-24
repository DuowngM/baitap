import React from "react";
import { handleAdd, rename } from "../store/reducer/todolist";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { ObjTodo } from "../store/reducer/todolist";



function ChuaBaiTap1() {
     const [valueInput, setValueInput] = React.useState<ObjTodo>({
          id: Math.floor(Math.random() * 100),
          nameInput: ""
     })
     
     const getTodo = useSelector((state:RootState) => {
          return state.todo.arr
     })
     
     
     const dispatch = useDispatch()

     const handleValue = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
          setValueInput({...valueInput, [e.target.name]: e.target.value})          
     }
       
     const handleAddTodo = () => {
          dispatch(rename(valueInput))
          setValueInput({nameInput:"", id:0})
     }
     
  return (
    <div>
      <div className="bg-yellow-500 h-20 flex items-center ">
        <h1 className="text-4xl text-white ml-5">Note App</h1>
      </div>
      <div className="w-4/12 h-fit m-auto mt-5 rounded-md border-2 border-sky-500">
        <div className="text-2xl  h-12  flex items-center">
          <p className="ml-5 font-bold">Title</p>
        </div>
        <div className="w-[90%] m-auto mt-5">
          <textarea
            className=" outline-none pl-1 text-2xl"
            id=""
            cols={47}
            rows={6}
            placeholder="Text something...."
            name="nameInput"
            onChange={handleValue}
            value={valueInput.nameInput}
          />
        </div>
        <div className=" ">
          <button onClick={handleAddTodo} className="w-[50px] h-[50px] bg-yellow-500 text-white rounded-full relative top-5 left-[520px] text-3xl">
            +
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-8">
          {getTodo.map((item, index) => (
               <div className="w-[200px] h-[100px] rounded-xl">
                    <h2>{item.nameInput}</h2>
               </div>
          ))}
      </div>
    </div>
  );
}

export default ChuaBaiTap1;
