import { ITask } from "../../App";
import { MainProps } from "../../pages/MainPage/MainPage";
import styles from "./AllTasks.module.scss";

import Header from "../Header/Header";
import List from "../List/List";
import Footer from "../Footer/Footer";

export type allProps = MainProps & { type: string };

function AllTasks({ tasks, type, setTasks }: allProps): React.JSX.Element {
  const doneTasks = tasks.filter((task: ITask) => task.status === "completed");
  const pendingTasks = tasks.filter((task: ITask) => task.status === "pending");

  const listStyle = (type: string): string => {
    switch (type) {
      case "pending":
        return styles.pending;
      case "completed":
        return styles.completed;
      default:
        return "";
    }
  };

  return (
    <div className={styles.general}>
      <div className={`${styles.list_item} ${listStyle(type)}`}>

        <Header type={type} />

        <br />
        <hr />

        <List
          tasks={tasks}
          type={type}
          setTasks={setTasks}
          doneTasks={doneTasks}
          pendingTasks={pendingTasks}
        />

      </div>

      <Footer
        tasks={tasks}
        type={type}
        setTasks={setTasks}
        doneTasks={doneTasks}
        pendingTasks={pendingTasks}
      />
      
    </div>
  );
}

export default AllTasks;
