import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
export default function TodoForm(){
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch(); 
    return (
      <li className="list-group-item">
        <input defaultValue = {todo.title}
        onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }))  }/>
        <button onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click" className="btn me-2"
              style={{ backgroundColor: "#ffc107", color: "#000" }}> 
            Update </button>
      <button onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"className="btn"
              style={{ backgroundColor: "#28a745", color: "#fff" }}> 
            Add </button>
    </li>
);}

  