import axios from 'axios'

const API='https://no-country-s16-backend-production.up.railway.app/api/v1'

export const pacientesList= async () => 
{
    try {
        const response =  await axios.get(`${API}/patients/`)
        return response
    } catch (error) {
        console.error('error al ver los pacientes:', error)
        throw error
    }
}

export const pacientesPost = async (data) =>{
    try {
        const response = await axios.post(`${API}/patients/`,data)
        return response
    } catch (error) {
        console.error('error al cargar paciente: ',error)
        throw error
    }
}

export const pacientesOne = async (id) => {
    try {
        const response = await axios.get(`${API}/patients/${id}`)
        return response;
    } catch (error) {
        console.error('error al encontrar el paciente:', error);
        throw error
    }
}

export const pacientesDelete = async (id) => {
    try {
        const response = await axios.delete(`${API}/patients/${id}`)
        if (response.status === 200) {
            console.log('paciente borrado exitosamente');
        }
        return response;
    } catch (error) {
        console.error('error al borrar el paciente:', error);
        throw error
    }
}

export const pacientesUpdate = async (data) => {
    try {
        const response = await axios.put(`${API}/patients/${data.id}`, data)
        if (response.status === 200) {
            console.log('Paciente editado exitosamente');
        }
        return response;
    } catch (error) {
        console.error('error al editar el paciente:', error);
        throw error
    }
} 
    