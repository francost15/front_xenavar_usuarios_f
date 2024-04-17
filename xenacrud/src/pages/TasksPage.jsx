import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from '../components/TaskCard';
function TasksPage() {
  const {getTasks,tasks} = useTasks();
  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.lenght ===0) return (<h1>No hay tareas</h1>)
  
  return (
  <div className="grid md:grid-cols-2 grid-cols-3 gap-2">
    {
      tasks.map((task) =>(
        <TaskCard key={task._id} task={task}/>
      ))
    }
  </div>
  );
}

export default TasksPage