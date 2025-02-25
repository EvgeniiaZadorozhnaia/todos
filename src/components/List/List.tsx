import { ITask } from "../../App";
import { allProps } from "../AllTasks/AllTasks";
import styles from "./List.module.scss";

export type ListProps = allProps & {
  doneTasks: ITask[];
  pendingTasks: ITask[];
};

function List({
  type,
  tasks,
  setTasks,
  doneTasks,
  pendingTasks,
}: ListProps): React.JSX.Element {

  const updateTaskStatus = (id: string, status: string) => {
    setTasks((prevTasks: ITask[]) =>
      prevTasks.map((task: ITask) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  return (
    <>

      {type === "all" && (
        <ol className={styles.list}>
          {tasks.map((task: ITask) => (
            <li
              className={task.status === "completed" ? styles.completed : ""}
              key={task.id}>
              {task.title}
            </li>
          ))}
        </ol>
      )}

      {type === "completed" && (
        <ul className={styles.list}>
          {doneTasks.map((task: ITask) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}

      {type === "pending" && (
        <ul className={styles.list}>
          {pendingTasks.map((task: ITask) => (
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
      )}
      
    </>
  );
}

export default List;
