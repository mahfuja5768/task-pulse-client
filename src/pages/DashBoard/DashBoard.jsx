import { useEffect, useState } from "react";
import TaskList from "../../components/TaskList";
import CreateTask from "../../components/Modal/CreateTask";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import axiosSecure from "../../api";
import Loading from "../../components/Shared/Loading";

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const DashBoard = () => {
  // const [tasks, setTasks] = useState([])
  const { user, loading } = useAuth();
//   console.log(user?.email);
  if(loading){
      return <p><Loading/></p>
  }
  const {
    data: tasks = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks?email=${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
//   if (isLoading) {
//     return (
//       <div>
//         <Loading />
//       </div>
//     );
//   }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex  px-6 flex-col items-center pt-3 gap-16">
        <CreateTask refetch={refetch} />
        <TaskList tasks={tasks} refetch={refetch} />
      </div>
    </DndProvider>
  );
};

export default DashBoard;