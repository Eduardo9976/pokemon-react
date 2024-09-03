import styles from "./SectionSearch.module.scss"
import {content} from "./SectionSearchData"
import {SectionSearchCriteria} from "./SectionSearchCriteria.tsx"
import {DELIMITER} from "./constants/delimiter.ts"
import {SectionsBodyContent} from "../SectionsBodyContent.tsx"
import type {FC} from "react"
import {SectionsTitle} from "../SectionsTitle.tsx"

interface ContentProps {
    body: string[]
}

const Content: FC<ContentProps> = ({body}) => {
    const [beginning, highlight, ending] = body[0].split(DELIMITER)
    return (
        <p>
            {beginning}
            <span className={styles.highlight}>{highlight}</span>
            {ending}
        </p>
    )
}

export const SectionSearch = () => {
    return (
        <section className={styles.container}>
            <SectionsTitle title={content.title}/>
            <SectionsBodyContent>
                <Content body={content.body}/>
            </SectionsBodyContent>
            <SectionSearchCriteria/>
        </section>
    )
}
