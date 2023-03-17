import React from "react";
import "./styles.css";
import {ReactComponent as TrashIcon} from '../../assets/delete-icon.svg';
import {ReactComponent as EditIcon} from '../../assets/edit-icon.svg';

const TodoListItem = ({  onCheck, checked, onDelete, label }) => {
 
  return(
    <div className="todo-list-item">
      <div
        tabIndex="0"
        role="checkbox"
        aria-checked
        className="todo-list-item-content"
      >
        <input
          tabIndex="-1"
          type="checkbox"
          checked={checked}
        onChange = {onCheck}
        />
        <span className={checked ? "todo-list-item-checked" : ""}>{label}</span>
      </div>
      <div className="todo-list-item-tools">
        <EditIcon onClick={onDelete} className="todo-list-item-edit"/>
        <TrashIcon onClick={onDelete} className="todo-list-item-delete"/>
      </div>
      
    </div>
  );
}
export default TodoListItem;
