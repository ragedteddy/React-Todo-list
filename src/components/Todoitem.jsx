import React from "react";

function Todoitem(props) {
  return (
    <li id={props.id} onClick={props.onCheck}>
      {props.todoItem}
    </li>
  );
}

export default Todoitem;
