import axios from 'axios'

const API='https://no-country-s16-backend-production.up.railway.app/api/v1'

export const citasList= async () => 
{
    try {
        const response =  await axios.get(`${API}/appointment/`)
        return response
    } catch (error) {
        console.error('error al ver los events:', error)
        throw error
    }
}

export const citasPost = async (data) =>{
    try {
        const response = await axios.post(`${API}/appointment/`,data)
        return response
    } catch (error) {
        console.error('error al cargar cita: ',error)
        throw error
    }
}

export const citasOne = async (id) => {
    try {
        const response = await axios.get(`${API}/appointment/${id}`)
        return response;
    } catch (error) {
        console.error('error al encontrar la cita:', error);
        throw error
    }
}

export const citasDelete = async (id) => {
    try {
        const response = await axios.delete(`${API}/appointment/${id}`)
        if (response.status === 200) {
            console.log('cita borrado exitosamente');
        }
        return response;
    } catch (error) {
        console.error('error al borrar la cita:', error);
        throw error
    }
}

export const citasUpdate = async (data) => {
    try {
        const response = await axios.put(`${API}/appointment/${data.id}`, data)
        if (response.status === 200) {
            console.log('Cita editado exitosamente');
        }
        return response;
    } catch (error) {
        console.error('error al editar la cita:', error);
        throw error
    }
} 
    