import { createContext, useReducer } from 'react'
import type { ReactNode, FC } from 'react'
import {GlobalProviderProps} from "./types.ts"
import {globalReducer} from "./globalReducer.ts"
import {initialState} from "./initialState.ts"

export const GlobalContext = createContext<GlobalProviderProps | null>(null)

interface Props {
    children: ReactNode
}

export const GlobalProvider: FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}
