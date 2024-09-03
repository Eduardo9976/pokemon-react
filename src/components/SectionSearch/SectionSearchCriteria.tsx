import {ChangeEventHandler, FormEvent, useContext} from "react"
import styles from "./SectionSearch.module.scss"
import {SearchActionEnum, SearchProviderProps} from "../../context/SearchContext/types.ts"
import {SearchContext} from "../../context/SearchContext/SearchContext.tsx"
import {SectionSearchCriteriaType} from "./SectionSearchCriteriaType.tsx";
import {SectionSearchCriteriaValue} from "./SectionSearchCriteriaValue.tsx";

export const SectionSearchCriteria = () => {
    const {state, dispatch} = useContext(SearchContext) as SearchProviderProps

    const onChangeType: ChangeEventHandler<HTMLSelectElement> = (event) => {
        dispatch({type: SearchActionEnum.SET_TYPE, payload: event.target.value});
    }

    const onChangeValue: ChangeEventHandler<HTMLInputElement> = (event) => {
        dispatch({type: SearchActionEnum.SET_SEARCH_VALUE, payload: event.target.value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch({type: SearchActionEnum.SET_FETCH_DETAILS, payload: true})
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <SectionSearchCriteriaType type={state.type} onChangeCb={onChangeType}/>
            <SectionSearchCriteriaValue searchValue={state.searchValue} onChangeCb={onChangeValue}/>
            <button
                className={styles.button}
                disabled={!state.searchValue}
                type="submit"
            >Buscar</button>
        </form>
    )
}
