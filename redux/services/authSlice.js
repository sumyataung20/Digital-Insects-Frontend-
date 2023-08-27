import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      const userInfo = {
        id: state.id,
        user: state.email,
        token: state.token,
        phone: state.phone,
        name: state.name,
        user_role: state.user_role,
        profile_image: state.profile_image,
      };
      localStorage.setItem("user-info", JSON.stringify(userInfo));
    },

    removeUser: (state) => {
      (state.user = null),
        (state.token = null),
        // Cookies.set(
        //   "user",
        //   JSON.stringify(state.user),
        //   Cookies.set("token", state.token, { expires: 1 })
        // );

        localStorage.removeItem("user-info");
    },
  },
});

const isAuthenticated = () => {
  const userInfo = localStorage.getItem("user-info");
  return !!userInfo; // Returns true if the user data exists in localStorage, indicating the user is authenticated
};

const getUserRole = () => {
  const userInfo = localStorage.getItem("user-info");
  if (userInfo) {
    const { user_role } = JSON.parse(userInfo);
    return user_role; // Return the user's role as a string ("admin" or any other role)
  }

  return ""; // Return an empty string or some default value if the user data doesn't exist
};
export { isAuthenticated, getUserRole };

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
