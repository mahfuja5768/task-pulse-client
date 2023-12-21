import axiosSecure from ".";

export const postATask = async (task) => {
  // console.log(review)
  const { data } = await axiosSecure.post("/tasks", task);
  return data;
};
export const removeTask = async (id) => {
  // console.log(review)
  const { data } = await axiosSecure.delete(`/tasks/${id}`);
  return data;
};

export const taskDetails = async (id) => {
  const { data } = await axiosSecure.get(`/tasks/${id}`);
  return data;
};