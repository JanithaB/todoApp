/* eslint-disable react/prop-types */
import styles from "./Cardboard.module.css";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faFloppyDisk, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Cardboard = ({tasks, deleteTask, editTask}) => {

  const [editingIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index]);
  };

  const handleSave = (index) => {
    editTask(index, editValue);
    setEditIndex(null);
  };

  return (
    <section className={styles.container}>
      {Array.isArray(tasks)}
      <ul>
      {tasks.map((task, index) => (
          <li key={index} className={styles.content}>
            {editingIndex === index ? (
              <>
                <input className={styles.formfill}
                  type="text" 
                  value={editValue} 
                  onChange={(e) => setEditValue(e.target.value)} 
                />
                <button onClick={() => handleSave(index)} className={styles.button}><FontAwesomeIcon icon={faFloppyDisk} className={styles.icon}/></button>
              </>
            ) : (
              <>
                {task}
                <div className={styles.buttonContainer}>
                  <button onClick={() => handleEdit(index)} className={styles.button}><FontAwesomeIcon icon={faPenToSquare} className={styles.icon}/></button>
                  <button onClick={() => deleteTask(index)} className={styles.button}><FontAwesomeIcon icon={faTrashCan} className={styles.icon}/></button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Cardboard
