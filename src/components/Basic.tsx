// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../store/store";
// import { addTodo, deleteTodo } from "../store/reducers/todoSlice";
// interface TodoList {
//   nameTodo: string;
//   id: number;
// }
// function Basic() {
//   const todoList: TodoList[] = useSelector((state: RootState) => {
//     return state.todoSlice.todo;
//   });
//   const dispatch = useDispatch();
//   const [textValue, setTextValue] = useState<string>("");
//   const handleAddTodo = (): void => {
//     if (!textValue) return alert("Ko để trống");
//     dispatch(addTodo(textValue));
//     setTextValue("");
//   };
//   const handleDelete = (id: number) => {
//     dispatch(deleteTodo(id));
//   };
//   return (
//     <>
//       <div className="bg-yellow-500 h-20 flex items-center ">
//         <h1 className="text-4xl text-white ml-5">Note App</h1>
//       </div>
//       <div className="w-4/12 h-fit m-auto mt-5 rounded-md border-2 border-sky-500">
//         <div className="text-2xl  h-12  flex items-center">
//           <p className="ml-5 font-bold">Title</p>
//         </div>
//         <div className="w-[90%] m-auto mt-5">
//           <textarea
//             className=" outline-none pl-1 text-2xl"
//             id=""
//             cols={47}
//             rows={6}
//             placeholder="Text something...."
//             onChange={(e) => setTextValue(e.target.value)}
//             value={textValue}
//           />
//         </div>
//         <div className=" ">
//           <button
//             className="w-[50px] h-[50px] bg-yellow-500 text-white rounded-full relative top-5 left-[520px] text-3xl"
//             onClick={handleAddTodo}
//           >
//             +
//           </button>
//         </div>
//       </div>
//       <div>
//         {todoList.map((item, index) => {
//           return (
//             <div key={index}>
//               <p>{item.nameTodo}</p>
//               <button
//                 className="border-2 border-red-500"
//                 onClick={() => handleDelete(item.id)}
//               >
//                 Xoa
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default Basic;
