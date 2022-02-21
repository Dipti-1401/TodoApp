import { createSlice } from "@reduxjs/toolkit";

const addTodoReducer = createSlice({
  name: "user",
  initialState:{
    name: null,
    list:[]
  },
  reducers: {
    addTodos: (state, action) => {
      state.list.push(action.payload);
      return state;
    },
    removeTodos: (state, action) => {
      return state.list.filter((item) => item.id !== action.payload);
    },

    updateTodos: (state, action) => {
      return state.list.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },

    login: (state , action) =>{
      state.user = action.payload
  },

  logout: (state) => {
      state.user = null
  },
   
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  login,
  logout
} = addTodoReducer.actions;

export const selectUser = (state) => state.user;


export const reducer = addTodoReducer.reducer;