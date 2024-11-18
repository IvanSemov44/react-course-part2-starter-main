import { ReactNode, useReducer } from 'react';
import AuthContext from './authContext';

interface LoginAction {
    type: "LOGIN";
    userName: string;
}

interface LogoutAction {
    type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
    switch (action.type) {
        case "LOGIN":
            return (state = action.userName);
        case "LOGOUT":
            return (state = "");
    }
};

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