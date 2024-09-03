import {SearchState} from "./types.ts";

export const initialState: SearchState = {
    type: 'name',
    searchValue: '',
    fetchDetails: true
}
