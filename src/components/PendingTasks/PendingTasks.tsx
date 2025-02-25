import { ITask } from "../../App";
import { MainProps } from "../../pages/MainPage/MainPage";
import styles from "./PendingTasks.module.scss";

function PendingTasks({ tasks, setTasks }: MainProps) {
  const pendingTasks = tasks.filter((task: ITask) => task.status === "pending");

  const updateTaskStatus = (id: string, status: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  return (
    <div className={styles.all_tasks_list}>
      <div>
        <h2>Нужно сделать</h2>
        <ul className={styles.list}>
          {pendingTasks.map((task) => (
            <div className={styles.task_item} key={task.id}>
              <input
                type="checkbox"
                id={task.id}
                onChange={() => updateTaskStatus(task.id, "completed")}
              />
              <label htmlFor={task.id}>{task.title}</label>
            </div>
          ))}
        </ul>
      </div>
      <div>
        Нужно сделать задач: {pendingTasks.length} / {tasks.length}
      </div>
    </div>
  );
}

export default PendingTasks;
