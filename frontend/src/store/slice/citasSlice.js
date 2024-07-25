import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { citasList } from "../../api/citas";
import { pacientesOne } from "../../api/pacientes";

export const listCitas = createAsyncThunk("citas/listCitas", async () => {
  try {
    const response = await citasList();
    const citaData = response.data;

    const citasConPacientes = await Promise.all(
      citaData.map(async (cita) => {
        const paciente = await pacientesOne(cita.patientId);
        const pacienteone = paciente.data;
        return {
          ...cita,
          pacienteone,
        };
      })
    );

    return citasConPacientes;
  } catch (error) {
    console.error("Error buscar citas:", error);
    throw error;
  }
});

const citaSlice = createSlice({
  name: "cita",
  initialState: {
    citaData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listCitas.fulfilled, (state, action) => {
      state.loading = "exito";
      state.citaData = action.payload;
    });
  },
});

export const { clearCitaData } = citaSlice.actions;
export default citaSlice.reducer;
