import { useState } from "react";
import styles from "./Form.module.css";

// eslint-disable-next-line react/prop-types
const Form = ({addTask}) => {

  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim()) {
      addTask(userInput);
      setUserInput("");
    };
  };
  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.formfill}
               type="text"
               placeholder="Enter your task . . ."
               value={userInput}
               onChange={(e) => setUserInput(e.target.value)}/>
        <button className={styles.button} type="submit">Add task</button>
    </form>
  )
}

export default Form