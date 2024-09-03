import {BaseFnReducer} from "../../types/reducers.ts";
import {BaseProviderProps} from "../../types/contextProviderProps.ts";

export enum GlobalActionEnum {
    SET_LOADING = 'SET_LOADING'
}

export interface GlobalState {
    loading: boolean
}

export interface GlobalAction {
    type: keyof typeof GlobalActionEnum
    payload: boolean
}

export type GlobalProviderProps = BaseProviderProps<GlobalState, GlobalAction>

export type SetLoading = BaseFnReducer<GlobalState, boolean>

export type GlobalDispatcher = {
    [GlobalActionEnum.SET_LOADING]: SetLoading
}
