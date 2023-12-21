import { useEffect, useState } from "react";
import TaskList from "../../components/TaskList";
import CreateTask from "../../components/Modal/CreateTask";

const Home = () => {
    const [tasks, setTasks] = useState([])
    console.log(tasks);

    useEffect(()=>{
        setTasks(JSON.parse(localStorage.getItem("tasks")))
    },[])

    return (
        <div className="flex  flex-col items-center pt-3 gap-16">
      <CreateTask tasks={tasks} setTasks={setTasks} />
      {/* <TaskList tasks={tasks} setTasks={setTasks} /> */}
        </div>
    );
};

export default Home;