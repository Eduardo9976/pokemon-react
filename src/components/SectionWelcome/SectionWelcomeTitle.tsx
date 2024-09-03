import type {FC} from "react"
import styles from "./SectionWelcome.module.scss"

interface Props {
    title: string
    highLight: string

}

export const SectionWelcomeTitle: FC<Props> = ({title, highLight}) => {
    return (
        <h1 className={styles.title}>
            {title}
            <span className={styles.highlight}> {highLight}</span>
        </h1>
    )
}
