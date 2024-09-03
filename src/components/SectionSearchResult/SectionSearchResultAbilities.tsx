import {MappedPayload} from "./types.ts";
import {FC} from "react";
import styles from "./SectionSearchResult.module.scss";

interface Props {
    payload: MappedPayload
}

const shortEffectDefault = 'As habilidades ou movimentos, são os poderes que os pokémons possuem para combate. Elas se dividem em 3 tipos: Físicos, Especiais e Efeito.'

export const SectionSearchResultAbilities: FC<Props> = ({payload}) => {
    return (
        <div className={styles.detailsContainerColumn}>
            <div
                className={styles.abilitiesDetails}
            >
                <p><i className="fas fa-info">-</i> {shortEffectDefault} </p>
            </div>
            <div className={styles.detailsInformations}>
                <div>
                    <p><b>Habilidades:</b></p>
                    <ul>
                        {
                            payload?.abilities.map(({ability}, index) => (
                                <li
                                    className={styles.informationList}
                                    key={index}
                                    onClick={() => alert(ability.url)}
                                >
                                    - <i className="fas fa-info-circle"></i> {ability.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div>
                    <p><b>Evoluções:</b></p>
                    <ul>
                        {
                            payload?.abilities.map(({ability}, index) => (
                                <li
                                    className={styles.informationList}
                                    key={index}
                                    onClick={() => alert(ability.url)}
                                >
                                    - <i className="fas fa-info-circle"></i> {ability.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
