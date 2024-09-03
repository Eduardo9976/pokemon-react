import styles from "./DoYouKnowAndCuriosity.module.scss"
import {SectionDoYouKnow} from "../SectionDoYouKnow"
import {SectionCuriosity} from "../SectionCuriosity"

export const DoYouKnowAndCuriosity = () => {
    return (
        <div className={styles.container}>
            <SectionDoYouKnow/>
            <SectionCuriosity/>
        </div>
    )
}
