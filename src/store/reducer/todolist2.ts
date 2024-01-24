import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
interface Person{
     person:{
          id:number,
          name:string,
          point:number
     }[]
}


export const personSlice = createSlice({
  name: 'Person',
  initialState:{
     person:[]
  },
  reducers: {
     addPerson:(state:Person,action:PayloadAction<string>)=>{
          const newPerson={
               id:Math.floor(Math.random()*99999),
               name:action.payload,
               point:0
          }
          state.person.push(newPerson)
     },
     deletePerson:(state:Person,action:PayloadAction<number>)=>{
          console.log(action);
          const index=state.person.findIndex(item=>item.id===action.payload)
          if (index!==-1) {
               state.person.splice(index,1)
          }
     },
     decrement:(state:Person,action:PayloadAction<number>)=>{
          const index=state.person.findIndex(item=>item.id===action.payload)
          if (state.person[index].point===0) {
               alert("Ban het diem")
               return
          }
          state.person[index].point-=1
     },
     increment:(state:Person,action:PayloadAction<number>)=>{
          const index=state.person.findIndex(item=>item.id===action.payload)
          state.person[index].point+=1
     },

    
  },
})

// Action creators are generated for each case reducer function
export const { addPerson,deletePerson,decrement,increment } = personSlice.actions

export default personSlice.reducer