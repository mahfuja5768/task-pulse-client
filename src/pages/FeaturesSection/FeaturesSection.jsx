import { motion } from "framer-motion";

import React from "react";
import SectionTitle from "../../components/SectionTitle";

const FeaturesSection = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-[#f0e1e1] pt-24 py-12"
    >
      <div className="container mx-auto px-8">
        <SectionTitle title={"Key Features"}></SectionTitle>

        {/* Add Task */}
        <div className="flex items-center my-10 ">
          <div className="flex-shrink-0 mr-4">
            <svg
              className="h-6 w-6 text-pink-500 border-2 border-pink-500 me-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Add Task</h3>
            <p className="text-gray-700 leading-relaxed">
              Easily add new tasks to your list with a simple click of a button.
              Stay organized and keep track of your to-do items effortlessly.
            </p>
          </div>
        </div>

        {/* Drag and Drop Tasks */}
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 mr-4">
            <svg
              className="h-6 w-6 text-pink-500 border-2 border-pink-500 me-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 4l-7 7M4 4l7 7"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Drag and Drop Tasks</h3>
            <p className="text-gray-700 leading-relaxed">
              Organize your tasks seamlessly by dragging and dropping them into
              different categories, such as Ongoing or Completed. Enjoy a
              flexible and intuitive workflow.
            </p>
          </div>
        </div>

        {/* Edit Task */}
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 mr-4">
            <svg
              className="h-6 w-6 text-pink-500 border-2 border-pink-500 me-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 3a2 2 0 012 2v14M7 7a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V7z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Edit Task</h3>
            <p className="text-gray-700 leading-relaxed">
              Make updates to your tasks effortlessly. Whether it's changing due
              dates, modifying details, or adjusting priorities, editing tasks
              is a breeze.
            </p>
          </div>
        </div>

        {/* Delete Task */}
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 mr-4">
            <svg
              className="h-6 w-6 text-pink-500 border-2 border-pink-500 me-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Delete Task</h3>
            <p className="text-gray-700 leading-relaxed">
              Remove completed or unnecessary tasks with a simple delete action.
              Keep your task list focused and clutter-free.
            </p>
          </div>
        </div>

        {/* View Task Details */}
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <svg
              className="h-6 w-6 text-pink-500 border-2 border-pink-500 me-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 14a6 6 0 01-6 6m6-6v6m0 0l-3-3"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">View Task Details</h3>
            <p className="text-gray-700 leading-relaxed">
              Dive deeper into your tasks by viewing detailed information.
              Access due dates, descriptions, and any additional details to stay
              informed.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
