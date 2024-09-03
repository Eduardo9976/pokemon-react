import {ChangeEvent, FC} from "react";
import styles from "./SectionSearch.module.scss";

interface Props {
    searchValue: string
    onChangeCb: (event: ChangeEvent<HTMLInputElement>) => void

}

export const SectionSearchCriteriaValue: FC<Props> = ({searchValue, onChangeCb}) => {
    return (
        <fieldset>
            <label htmlFor="selectType">Pesquisar(Inglês):</label>
            <input
                className={styles.inputText}
                id="selectType"
                name="selectType"
                type="search"
                value={searchValue}
                placeholder="Encontre um Pokémon"
                onChange={onChangeCb}
            />
        </fieldset>
    )
}
