import { createContext, useReducer } from 'react'
import type { ReactNode, FC } from 'react'
import {SearchProviderProps} from "./types.ts"
import {searchReducer} from "./searchReducer.ts"
import {initialState} from "./initialState.ts"

export const SearchContext = createContext<SearchProviderProps | null>(null)

interface Props {
    children: ReactNode
}

export const SearchProvider: FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(searchReducer, initialState);

    return (
        <SearchContext.Provider value={{ state, dispatch }}>
            {children}
        </SearchContext.Provider>
    )
}
