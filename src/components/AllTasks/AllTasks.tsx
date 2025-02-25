import { MainProps } from "../../pages/MainPage/MainPage";
import styles from "./AllTasks.module.scss";

type AllTasksProps = Pick<MainProps, "tasks">;

function AllTasks({ tasks }: AllTasksProps) {
  return (
    <div className={styles.all_tasks_list}>
      <div>
        <h2>Все задачи</h2>
        <ul className={styles.list}>
          {tasks.map((task) => (
            <li
              className={task.status === "completed" ? styles.completed : ""}
              key={task.id}>
              {task.title}
            </li>
          ))}
        </ul>
      </div>

      <div>Всего задач: {tasks.length} </div>
    </div>
  );
}

export default AllTasks;
