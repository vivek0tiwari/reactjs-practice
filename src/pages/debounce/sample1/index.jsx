
// interface ToDoItem {

import React, { useCallback } from "react"
import { useState } from "react"
import {useTodoList} from './hooks'
import  TodoItem  from "./TodoItem"

// }
// interface ToDoState {
//     todos: 
// }
export const ToDoList = () =>{
    const [text, setText] = useState('')
    const [todoList, addItem, toggleTodoItem, removeItem] = useTodoList([])
    const onTextChange = useCallback((e)=>{
        e.preventDefault();
        const {target:{value}} = e
        setText(value)
    },[setText])
    const onAddClick = useCallback((e)=>{
        addItem(text)
        setText('')
    },[setText, text, addItem])
    return <div>
        <input type="text" onChange={onTextChange} value={text}></input>
        <button onClick={onAddClick}>{'Add Task'}</button>
        <div className="todo-list-container">
        {todoList.map((todoItem)=>{
            return <TodoItem key={todoItem.id} {...todoItem} onTodoItemClick={toggleTodoItem} onDelete={removeItem} />
        })}
        </div>
        </div>
}