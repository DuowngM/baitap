import { PayloadAction, createSlice } from '@reduxjs/toolkit'
export interface Init {
     value: number
     name:string
     arr: ObjTodo[]
}
export interface ObjTodo {
     id:number,
     nameInput: string

}
const initialState:Init = {
  value: 0,
  name:"hao",
  arr: JSON.parse(localStorage.getItem("todos")||"[]")
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
     handleAdd: (state:Init) => {
          console.log(state);
          state.value = state.value + 1
     },
     rename: (state:Init, actions:PayloadAction<ObjTodo>) => {
          console.log("111", actions.payload);
          state.arr.push(actions.payload)
          localStorage.setItem("todos", JSON.stringify(state.arr))
     }
  }
})
export const { handleAdd, rename } = todoSlice.actions

export default todoSlice.reducer