import styles from "./SectionSearchResult.module.scss"
import apiClient from "../../services/httpClient.ts"
import {content} from "./SectionSearchResultData.ts"
import {useCallback, useContext, useEffect, useState} from "react"
import {MappedPayload} from "./types.ts"
import {SearchContext} from "../../context/SearchContext/SearchContext.tsx"
import {SearchActionEnum, SearchProviderProps} from "../../context/SearchContext/types.ts"
import {GlobalActionEnum, GlobalProviderProps} from "../../context/GlobalContext/types.ts"
import {GlobalContext} from "../../context/GlobalContext/GlobalContext.tsx"
import {payloadMapper} from "./utils/payloadMapper.ts"
import {SectionSearchResultDetails} from "./SectionSearchResultDetails.tsx";
import {SectionSearchResultAbilities} from "./SectionSearchResultAbilities.tsx";

export const SectionSearchResult = () => {
    const {state: globalState, dispatch: globalDispatch} = useContext(GlobalContext) as GlobalProviderProps
    const {state, dispatch} = useContext(SearchContext) as SearchProviderProps
    const {fetchDetails, searchValue} = state

    const [payload, setPayload] = useState<MappedPayload | null>(null)

    const fetchData = useCallback(async () => {
        try {
            globalDispatch({type: GlobalActionEnum.SET_LOADING, payload: true})

            const name = searchValue?.toLowerCase() || 'bulbasaur'
            const response = await apiClient.getByName(name)

            setPayload(payloadMapper(response))
        } catch (error) {
            console.error(error)
        } finally {
            dispatch({type: SearchActionEnum.SET_FETCH_DETAILS, payload: false})
            globalDispatch({type: GlobalActionEnum.SET_LOADING, payload: false})
        }
    }, [dispatch, searchValue])

    useEffect(() => {
        if (fetchDetails) {
            fetchData()
        }
    }, [fetchData, fetchDetails])

    const loadingComponent = <div>Loading...</div>
    const mainComponent =
        <div className={styles.detailsContainer}>
            <SectionSearchResultDetails payload={(payload as MappedPayload)}/>
            <SectionSearchResultAbilities payload={(payload as MappedPayload)}/>
        </div>

    return (
        <div className={styles.container}>
            <h1>{content.title}</h1>
            {globalState.loading ? loadingComponent : mainComponent}
        </div>
    )
}
