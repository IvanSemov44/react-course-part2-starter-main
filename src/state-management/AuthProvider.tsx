import { ReactNode, useReducer } from 'react';
import AuthContext from './contexts/authContext';
import authReducer from './reducers/authReducer';

interface Props {
    children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
    const [username, dispatch] = useReducer(authReducer, "");


    return (
        <AuthContext.Provider value={{ username, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider