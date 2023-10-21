import './style.css'
import {memo} from 'react'
const TodoItem = ({ data, selected, id, onTodoItemClick, onDelete }) => {
    const _onTodoItemClick = ()=>{
        onTodoItemClick && onTodoItemClick(id)
    }
    const _onDelete = ()=>{
        onDelete && onDelete(id)
    }
  return (
    <div className="todo-item-conatiner">
        <div className='checkbox-with-text'>
            <input type={"checkbox"} onClick={_onTodoItemClick} className="checkbox" checked={selected}/>
            <div className={selected?' todo-data  selected' :'todo-data'}>{data}</div>
        </div>
      <button className="icon-remove" onClick={_onDelete}>
        {"X"}
      </button>
    </div>
  );
};

export default memo(TodoItem)