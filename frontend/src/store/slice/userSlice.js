import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { userGoogle, userLogin } from "../../api/login";

export const listGoogle = createAsyncThunk("usuarios/userGoogle", async () => {
  try {
    const response = await userGoogle();
    
    const userData = response.data;
    console.log(userData)

    return userData;
  } catch (error) {
    console.error("Error buscar pacientes:", error);
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    loading: false,
    error: null,
  },
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder.addCase(listGoogle.fulfilled, (state, action) => {
      state.loading = "exito";
      state.userData = action.payload;
    });
    
  },
});

export const { clearUserData } = userSlice.actions;
export default userSlice.reducer;
