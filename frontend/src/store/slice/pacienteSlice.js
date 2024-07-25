import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pacientesList } from "../../api/pacientes";

export const listpacientes = createAsyncThunk("pacientes/listPacientes", async () => {
  try {
    const response = await pacientesList();
    
    const pacienteData = response.data;

    return pacienteData;
  } catch (error) {
    console.error("Error buscar pacientes:", error);
    throw error;
  }
});

const pacienteSlice = createSlice({
  name: "paciente",
  initialState: {
    pacienteData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listpacientes.fulfilled, (state, action) => {
      state.loading = "exito";
      state.pacienteData = action.payload;
    });
  },
});

export const { clearPacienteData } = pacienteSlice.actions;
export default pacienteSlice.reducer;
