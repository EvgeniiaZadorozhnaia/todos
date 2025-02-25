import cart from "../../public/icons/trash.svg";
import { ITask } from "../../App";
import { ListProps } from "../List/List";
import styles from "./Footer.module.scss";

function Footer({
  tasks,
  setTasks,
  type,
  pendingTasks,
  doneTasks,
}: ListProps): React.JSX.Element {

  const deleteDoneTasks = () => {
    setTasks((prevTasks: ITask[]) =>
      prevTasks.filter((task: ITask) => task.status !== "completed")
    );
  };
  
  return (
    <>

      {type === "all" && (
        <div className={styles.tasks_footer}>Всего задач: {tasks.length} </div>
      )}

      {type === "pending" && (
        <div className={styles.tasks_footer}>
          В ожидании: {pendingTasks.length} / {tasks.length}
        </div>
      )}

      {type === "completed" && (
        <div className={styles.tasks_footer}>
          <div>
            Выполнено: {doneTasks.length} / {tasks.length}
          </div>
          <button onClick={deleteDoneTasks} data-testid="delete_button">
            <img src={cart} alt="cart icon" />
          </button>
        </div>
      )}
      
    </>
  );
}

export default Footer;
