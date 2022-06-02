import { AuthContext } from "./auth/authContext"
import { AppRouter } from "./routers/AppRouter"
import { useEffect, useReducer } from "react"
import { authReducer } from "./auth/authReducer"


const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    // Almacenar el usuario en el localStorage
    useEffect(() => {
      if (!user) return;

      localStorage.setItem('user', JSON.stringify(user));
        
    }, [ user])
    
    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
