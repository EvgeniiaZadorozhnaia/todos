import { ITask } from "../../App";
import { MainProps } from "../../pages/MainPage/MainPage";
import styles from "./AllTasks.module.scss";

type AllTasksProps = Pick<MainProps, "tasks">;

function AllTasks({ tasks }: AllTasksProps): React.JSX.Element {
  return (
    <div className={styles.all_tasks_list}>
      <div>
        <h2>Все задачи</h2>
        <br />
        <hr />
        <ol className={styles.list}>
          {tasks.map((task: ITask) => (
            <li
              className={task.status === "completed" ? styles.completed : ""}
              key={task.id}>
              {task.title}
            </li>
          ))}
        </ol>
      </div>

      <div>Всего задач: {tasks.length} </div>
    </div>
  );
}

export default AllTasks;
