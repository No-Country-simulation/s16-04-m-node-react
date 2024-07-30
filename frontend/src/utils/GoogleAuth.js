import axios from 'axios';

export const handleGoogleLogin = () => {
  window.location.href = 'https://no-country-s16-backend-production.up.railway.app/api/v1/users/auth/google';
};

export const handleGoogleResponse = async (code) => {
  try {
    const response = await axios.post('https://no-country-s16-backend-production.up.railway.app/api/v1/users/auth/google/callback', { code });
    return response.data;
  } catch (error) {
    console.error('Error al obtener el token de Google:', error.message);
    throw new Error('Error al autenticar con Google');
  }
};
