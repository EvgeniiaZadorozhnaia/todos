import { ITask } from "../../App";
import { MainProps } from "../../pages/MainPage/MainPage";
import styles from "./AllTasks.module.scss";
import cart from "../../public/icons/trash.svg";

type allProps = MainProps & { type: string };

function AllTasks({ tasks, type, setTasks }: allProps): React.JSX.Element {
  const doneTasks = tasks.filter((task: ITask) => task.status === "completed");
  const pendingTasks = tasks.filter((task: ITask) => task.status === "pending");

  const deleteDoneTasks = () => {
    setTasks((prevTasks: ITask[]) =>
      prevTasks.filter((task: ITask) => task.status !== "completed")
    );
  };

  const updateTaskStatus = (id: string, status: string) => {
    setTasks((prevTasks: ITask[]) =>
      prevTasks.map((task: ITask) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  return (
    <div className={styles.general}>
      <div className={styles.all_tasks_list}>
        {type === "all" && <h2>Все задачи</h2>}
        {type === "completed" && <h2>Сделано</h2>}
        {type === "pending" && <h2>Нужно сделать</h2>}
        <br />
        <hr />
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
      </div>
      {type === "completed" && (
        <div className={styles.tasks_footer}>
          <div>
            Сделано задач: {doneTasks.length} / {tasks.length}
          </div>
          <button onClick={deleteDoneTasks} data-testid="delete_button">
            <img src={cart} alt="cart icon" />
          </button>
        </div>
      )}

      {type === "all" && (
        <div className={styles.tasks_footer}>Всего задач: {tasks.length} </div>
      )}
      {type === "pending" && (
        <div className={styles.tasks_footer}>
          Нужно сделать задач: {pendingTasks.length} / {tasks.length}
        </div>
      )}
    </div>
  );
}

export default AllTasks;
