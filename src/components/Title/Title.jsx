import styles from "./Title.module.css";

const Title = () => {
  return (
    <div className={styles.title} style={{color: 'white'}}>
      <span className={styles.the}>The</span> ToDo List
    </div>
  )
}

export default Title
