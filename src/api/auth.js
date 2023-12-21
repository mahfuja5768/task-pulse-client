/* eslint-disable react-hooks/rules-of-hooks */
import axiosSecure from ".";

export const saveUser = async (user) => {
  console.log(user);
  const date = new Date()
  console.log(user?.email);
  const currentUser = {
    name: user?.displayName,
    photoUrl: user?.photoURL,
    email: user?.email,
    date
  };
  const { data } = await axiosSecure.post("/users", currentUser);
  console.log(data);
  return data;
};

//clear token from client side
export const clearToken = async () => {
  localStorage.removeItem("access-token");
};

export const addToWishlists = async (wishlist) => {
  // console.log(wishlist)
  const { data } = await axiosSecure.post("/wishlists", wishlist);
  return data;
};