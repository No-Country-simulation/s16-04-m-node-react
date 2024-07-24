import axios from 'axios'

const API='https://no-country-s16-backend-production.up.railway.app/api/v1'

export const profesionalList= async () => 
{
    try {
        const response =  await axios.get(`${API}/proffesional/`)
        return response
    } catch (error) {
        console.error('error al ver los profesionales:', error)
        throw error
    }
}

export const profesionalPost = async (data) =>{
    try {
        const response = await axios.post(`${API}/proffesional/`,data)
        return response
    } catch (error) {
        console.error('error al cargar profesional: ',error)
        throw error
    }
}

export const profesionalOne = async (id) => {
    try {
        const response = await axios.get(`${API}/proffesional/${id}`)
        return response;
    } catch (error) {
        console.error('error al encontrar el profesional:', error);
        throw error
    }
}

export const profesionalDelete = async (id) => {
    try {
        const response = await axios.delete(`${API}/proffesional/${id}`)
        if (response.status === 200) {
            console.log('profesional borrado exitosamente');
        }
        return response;
    } catch (error) {
        console.error('error al borrar el profesional:', error);
        throw error
    }
}

export const profesionalUpdate = async (data) => {
    try {
        const response = await axios.put(`${API}/proffesional/${data.id}`, data)
        if (response.status === 200) {
            console.log('profesional editado exitosamente');
        }
        return response;
    } catch (error) {
        console.error('error al editar el profesional:', error);
        throw error
    }
} 
    