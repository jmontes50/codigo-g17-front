import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    logged: false,
    uid: null,
    photo: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.name;
      state.uid = action.payload.uid;
      state.photo = action.payload.photo;
      state.logged = true;
    },
    resetUser: (state) => {
      state.user = null;
      state.logged = false;
      state.uid = null;
      state.photo = null;
    },
  },
});

export const { setUser, resetUser } = authSlice.actions;
export const selectUser = (state) => state.auth;
//cuando exportamos algo por defecto al importarlo le podemos poner un alias para que sea más fácil de leer el código
export default authSlice.reducer;
