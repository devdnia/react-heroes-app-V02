import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";


export const LoginScreen = () => {

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {

        const action = {
            types: types.login,
            payload: {
                name: "Ivan",
            }
        }

        dispatch(action);

        // Ultima lastPath
        const lastPath = localStorage.getItem('lastPath') || 'marvel';
        
        // mediante el atributo replace : true no se vuelve al login
        navigate(lastPath, {
            replace: true
        });

    }

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}