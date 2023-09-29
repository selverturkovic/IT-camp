import styles from "./task.module.css";
console.log(styles.box);

const Task = () => {
  return (
    <div className={styles.box}>
      <p className={styles.myP}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
        pariatur!
      </p>
      <button className={styles.myButton}>Button</button>
    </div>
  );
};
export default Task;
