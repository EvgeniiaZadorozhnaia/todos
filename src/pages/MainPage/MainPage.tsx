import { useRef, useCallback, Dispatch, SetStateAction } from "react";
import Input from "../../components/Input/Input";
import styles from "./MainPage.module.scss";
import { ITask } from "../../App";
import { v4 as uuidv4 } from "uuid";
import AllTasks from "../../components/AllTasks/AllTasks";
import "animate.css";

export interface MainProps {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

function MainPage({ tasks, setTasks }: MainProps): React.JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const createTask = useCallback(() => {
    if (!inputRef.current || !inputRef.current.value.trim()) return;

    const newTask: ITask = {
      id: uuidv4(),
      title: inputRef.current.value,
      status: "pending",
    };

    setTasks([...tasks, newTask]);

    inputRef.current.value = "";
  }, [setTasks, tasks]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      createTask();
    }
  };

  return (
    <div className={styles.main_page}>
      <h1 className="animate__animated animate__flip">TODOS</h1>
      <Input
        ref={inputRef}
        onIconClick={createTask}
        placeholder="Чем займемся сегодня?"
        onKeyDown={handleKeyDown}
      />
      <div className={styles.task_windows}>
        <AllTasks tasks={tasks} setTasks={setTasks} type="all" />
        <AllTasks tasks={tasks} setTasks={setTasks} type="pending" />
        <AllTasks tasks={tasks} setTasks={setTasks} type="completed" />
      </div>
    </div>
  );
}

export default MainPage;
