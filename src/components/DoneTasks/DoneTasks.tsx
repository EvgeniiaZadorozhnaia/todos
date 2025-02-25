import { ITask } from "../../App";
import { MainProps } from "../../pages/MainPage/MainPage";
import styles from "./DoneTasks.module.scss";
import cart from "../../public/icons/trash.svg";

function DoneTasks({ tasks, setTasks }: MainProps) {
  const doneTasks = tasks.filter((task: ITask) => task.status === "completed");

  const deleteDoneTasks = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task: ITask) => task.status !== "completed")
    );
  };

  return (
    <div className={styles.all_tasks_list}>
      <div>
        <h2>Сделано</h2>
        <ul className={styles.list}>
          {doneTasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </div>
      <div className={styles.tasks_footer}>
        Сделано задач: {doneTasks.length} / {tasks.length}
        <button onClick={deleteDoneTasks}>
          <img src={cart} alt="cart icon" />
        </button>
      </div>
    </div>
  );
}

export default DoneTasks;
