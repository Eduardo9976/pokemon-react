import {BaseFnReducer} from "../../types/reducers.ts";
import {BaseProviderProps} from "../../types/contextProviderProps.ts"

export enum SearchActionEnum {
    SET_TYPE = 'SET_TYPE',
    SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
    SET_FETCH_DETAILS = 'SET_FETCH_DETAILS'
}

export interface SearchState {
    type: string
    searchValue: string
    fetchDetails: boolean
}

export type SearchAction =
    | { type: SearchActionEnum.SET_TYPE; payload: string }
    | { type: SearchActionEnum.SET_SEARCH_VALUE; payload: string }
    | { type: SearchActionEnum.SET_FETCH_DETAILS; payload: boolean }

export type SearchProviderProps = BaseProviderProps<SearchState, SearchAction>

export type SetType = BaseFnReducer<SearchState, string>

export type SetSearchValue = BaseFnReducer<SearchState, string>

export type SetFetchDetails = BaseFnReducer<SearchState, boolean>

export interface SearchDispatcher {
    [SearchActionEnum.SET_TYPE]: SetType
    [SearchActionEnum.SET_SEARCH_VALUE]: SetSearchValue
    [SearchActionEnum.SET_FETCH_DETAILS]: SetFetchDetails
}

// export interface SearchAction {
//     type: keyof typeof SearchActionEnum;
//     payload: typeof SearchActionEnum[keyof typeof SearchActionEnum] extends 'SET_FETCH_DETAILS' ? boolean : string
// }

// export type SetType = (state: SearchState, payload: string) => SearchState

// export type SetSearchValue = (state: SearchState, payload: string) => SearchState

// export type SearchDispatcher = {
//     [key in SearchActionEnum]: (state: SearchState, payload: string) => SearchState
// }

