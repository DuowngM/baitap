import { useState } from "react";
import "./Main.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addPerson, decrement, deletePerson, increment } from "../store/reducer/todolist2";
interface Person{
     id:number,
     name:string,
     point:0
}
const ChuaBaiTap2 = () => {
  const [inputValue, setInPutValue] = useState<string>("");
  const dispatch = useDispatch();
  const data:Person[] = useSelector((state: RootState) => {
    return state.person.person;
  });
  console.log(data);

  const handleAddPerson = () => {
    dispatch(addPerson(inputValue));
  };
  const handleDelete = (id:number)=>{
     dispatch(deletePerson(id))
  }
  const handleDecrementPoint = (id:number)=>{
     dispatch(decrement(id))
  }
  const handleIncrementPoint = (id:number)=>{
     dispatch(increment(id))
  }
  const totalPoint = data.reduce((a,b:Person)=>{
     return a+b.point
  },0)
  let max = 0
  for (let i = 0; i < data.length; i++) {
     if (data[i].point>max) {
          max=data[i].point
     }  
  }
     
  

  return (
    <>
      <div id="container">
        <div className="header">
          <div className="header__left">
            <p className="header__left__p">Players:{data.length}</p>
            <p className="header__left__p">Total Points:{totalPoint}</p>
          </div>
          <div className="header__mid">
            <h1>Bảng điểm</h1>
          </div>
          <div className="header__right"></div>
        </div>

        <div className="main">
          {data.map((item:Person, index) => (
            <div key={index} className="main__render">
              <div className="main__render--left">
                <span
                onClick={()=>handleDelete(item.id)}
                  className="material-symbols-outlined"
                  style={{
                    fontSize: "30px",
                    opacity: "0.5",
                    marginLeft: "25px",
                    cursor: "pointer",
                  }}
                >
                  delete
                </span>
              </div>
              <div className="main__render--mid">
                <div className="mid__left">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "70px", opacity:item.point===max? "1" :"0.5"}}
                  >
                    crowdsource
                  </span>
                </div>
                <div className="mid__right">
                  <p className="mid__right__text">{item.name}</p>
                </div>
              </div>
              <div className="main__render--right">
                <div className="right__left">
                  <span onClick={()=>handleDecrementPoint(item.id)} className="icon--decrement">-</span>
                </div>
                <div className="right__mid">
                  <span className="icon--point">{item.point}</span>
                </div>
                <div className="right__right">
                  <span onClick={()=>handleIncrementPoint(item.id)} className="icon--increment">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="footer">
          <div className="footer__left">
            <input
              type="text"
              className="footer__left__input"
              placeholder="Enter name"
              onChange={(e) => setInPutValue(e.target.value)}
            />
          </div>
          <div className="footer__right">
            <button onClick={handleAddPerson} className="btn text-red-500" >
              ADD PLAYER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChuaBaiTap2;
