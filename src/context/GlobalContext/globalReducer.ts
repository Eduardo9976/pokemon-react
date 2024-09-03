import {GlobalAction, GlobalActionEnum, GlobalDispatcher, GlobalState, SetLoading} from "./types.ts"

// updaters
const setLoading: SetLoading = (state, payload) => (
    {...state, loading: payload}
)

// Dispatcher
const DISPATCHER: GlobalDispatcher  = {
    [GlobalActionEnum.SET_LOADING]: setLoading,
}

// Reducer
export function globalReducer(state: GlobalState, action: GlobalAction): GlobalState {
    const handler = DISPATCHER[action.type]
    return handler ? handler(state, action.payload) : state
}
