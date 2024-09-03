import styles from "./SectionSearchResult.module.scss"
import {MappedPayload} from "./types.ts";
import {FC} from "react";
import {SectionSearchResultImage} from "./SectionSearchResultImage.tsx";

interface Props {
    payload: MappedPayload | undefined
}

export const SectionSearchResultDetails: FC<Props> = ({payload}) => {
    return (
        <div className={styles.detailsContainerColumn}>
            <SectionSearchResultImage image={payload?.image}/>
            <div className={styles.detailsInformations}>
                <div>
                    <p><b>Nome:</b> {payload?.name} </p>
                    <p><b>Registro:</b> {payload?.id} </p>
                    {payload?.weight && <p><b>Peso:</b> {payload?.weight} kg </p>}
                    {payload?.height && <p><b>Altura:</b> {payload?.height} m </p>}
                    <div>
                        <p><b>Tipo:</b></p>
                        <ul>
                            {
                                payload?.types.map((type, index) => (
                                    <li
                                        className={styles.informationList}
                                        key={index}
                                        onClick={() => alert(type)}
                                    >
                                        - <i className="fas fa-info-circle"></i> {type}
                                    </li>
                                ))
                            }
                        </ul>
                        {
                            payload?.imageBack &&
                            <div>
                                <img src={payload.imageBack} alt="Foto do Pokemon"/>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <p><b>Estatísticas:</b></p>
                    <ul>
                        {
                            payload?.stats.map((stats, index) => (
                                <li
                                    className={`${styles.informationList} ${styles.statistics}`}
                                    key={index}
                                >
                                    - <b>{stats.stat.name}: </b> {stats.base_stat}
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}

