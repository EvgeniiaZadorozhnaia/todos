import { useState } from "react";
import MainPage from "./pages/MainPage/MainPage";

export interface ITask {
  id: string;
  title: string;
  status: string;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <>
      <MainPage tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
