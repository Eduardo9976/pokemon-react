import {OPTIONS} from "./constants/options.ts"
import {FC, ChangeEvent} from "react"

interface Props {
    type: string
    onChangeCb: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const SectionSearchCriteriaType: FC<Props> = ({type, onChangeCb}) => {
    return (
        <fieldset>
            <label htmlFor="selectType">Critério de busca:</label>
            <select
                id="selectType"
                name="selectType"
                value={type}
                onChange={onChangeCb}>
                {
                    OPTIONS.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))
                }
            </select>
        </fieldset>
    )
}
