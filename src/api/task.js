import axiosSecure from ".";

export const postATask = async (task) => {
  // console.log(review)
  const { data } = await axiosSecure.post("/tasks", task);
  return data;
};
