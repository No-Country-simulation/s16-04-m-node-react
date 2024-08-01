import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useSignIn } from "react-auth-kit";

const GoogleRedirectHandler = () => {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const location = useLocation();

  useEffect(() => {
    const fetchGoogleUserData = async (code) => {
      try {
        const response = await axios.post("https://no-country-s16-backend-production.up.railway.app/api/v1/users/auth/google/callback", { code });
        const userData = response.data;

        
        const { token, user } = userData;

        
        signIn({
          token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: user,
        });

        
        navigate("/dashboard/home");
      } catch (error) {
        console.error("Error al autenticar con Google:", error);
        
      }
    };

    const query = new URLSearchParams(location.search);
    const code = query.get("code");

    if (code) {
      fetchGoogleUserData(code);
    } else {
      console.error("No se encontró el código de autorización");
      
    }
  }, [navigate, signIn, location]);

  return (
    <div>
      <h2>Redirigiendo...</h2>
      <p>Espere mientras lo redirigimos a su cuenta...</p>
    </div>
  );
};

export default GoogleRedirectHandler;

