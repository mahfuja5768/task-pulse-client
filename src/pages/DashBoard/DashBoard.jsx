import { useEffect, useState } from "react";
import TaskList from "../../components/TaskList";
import CreateTask from "../../components/Modal/CreateTask";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import axiosSecure from "../../api";
import Loading from "../../components/Shared/Loading";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import UserInfo from "../../components/UserInfo";
import SectionTitle from "../../components/SectionTitle";
import { motion } from "framer-motion";

const DashBoard = () => {
  // const [tasks, setTasks] = useState([])
  const { user, loading } = useAuth();
  //   console.log(user?.email);
  if (loading) {
    return (
      <p>
        <Loading />
      </p>
    );
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
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-[#f0e1e1] py-12 "
    >
      <SectionTitle title={"Dashboard"}></SectionTitle>
      <UserInfo></UserInfo>
      <DndProvider backend={HTML5Backend}>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className=" flex  px-6 flex-col items-center pt-3 gap-12"
        >
          <CreateTask refetch={refetch} />
          <TaskList tasks={tasks} refetch={refetch} />
        </motion.div>
      </DndProvider>
    </motion.div>
  );
};

export default DashBoard;
