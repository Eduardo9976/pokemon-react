import {
    SearchAction,
    SearchActionEnum,
    SearchDispatcher,
    SearchState,
    SetFetchDetails,
    SetSearchValue,
    SetType
} from "./types.ts"

// updaters
const setType: SetType = (state, payload) => (
    {...state, type: payload}
)

const setSearchValue: SetSearchValue = (state, payload) => (
    {...state, searchValue: payload}
)

const setFetchDetails: SetFetchDetails = (state, payload) => (
    {...state, fetchDetails: payload}
)

// Dispatcher
const DISPATCHER: SearchDispatcher  = {
    [SearchActionEnum.SET_TYPE]: setType,
    [SearchActionEnum.SET_SEARCH_VALUE]: setSearchValue,
    [SearchActionEnum.SET_FETCH_DETAILS]: setFetchDetails
}

// Reducer
export function searchReducer(state: SearchState, action: SearchAction): SearchState {
    const handler = DISPATCHER[action.type]
    /* eslint-disable */
    // @ts-ignore
    return handler ? handler(state, action.payload) : state
}
