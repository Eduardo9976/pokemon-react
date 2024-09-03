import styles from './SectionDiversity.module.scss'
import {content} from "./SectionDiversityData.ts"
import {SectionDiversityCard} from "./SectionDiversityCard.tsx";

export const SectionDiversity = () => {
    return (
        <div className={styles.container}>
            <h1>{content.title}</h1>
            {content.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <small className={styles.link}>
                {content.link.label}
                <a href={content.link.url} target="_blank">{content.link.description}.</a>
            </small>
            {
                content.cards.map((card, index) => (
                    <SectionDiversityCard key={index} {...card} />
                ))
            }
        </div>
    )
}
