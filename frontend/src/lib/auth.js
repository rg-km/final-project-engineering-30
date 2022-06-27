import { useContext, createContext } from "react";

export const authContext = createContext(null)

export function useAuthContext() {
    return useContext(authContext)
}