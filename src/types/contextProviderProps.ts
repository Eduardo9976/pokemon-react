import type {Dispatch} from "react";

export interface BaseProviderProps<S, A> {
    state: S
    dispatch: Dispatch<A>
}
