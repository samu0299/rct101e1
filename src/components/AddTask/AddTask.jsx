import React from "react";
// import { useState } from "react/cjs/react.production.min";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  // const [inputList,setInput] = useState("");
  const itemEvet=(e)=>{
    // setInput(e.target.value);
  };
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="indert taks" onChange={itemEvet}/>
      <button data-cy="add-task-button">+</button>
      <ol>
        {/* <li>{inputList}</li> */}
      </ol>
    </div>
  );
};

export default AddTask;
