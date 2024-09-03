import styles from "./SectionSearchResult.module.scss"
import logo from "../../assets/logo.png"
import {FC} from "react"

interface Props {
    image?: string | null
}

export const SectionSearchResultImage: FC<Props> = ({image}) => {
    return (
        <div className={styles.imageContainer}>
            <div
                className={styles.imageCard}
                style={{backgroundImage: `url(${image})`}}
            >
                {!image &&
                    <div className={styles.imageDefault}>
                        <img
                            src={logo}
                        />
                    </div>
                }
            </div>
        </div>
    )
}
