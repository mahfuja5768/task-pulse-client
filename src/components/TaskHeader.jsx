/* eslint-disable react/prop-types */
const TaskHeader = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} flex items-center justify-between px-2 h-12 pl-4 rounded-md uppercase text-sm font-bold text-white`}
    >
      {text}{" "}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};

export default TaskHeader;
