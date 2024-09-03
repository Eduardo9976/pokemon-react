import styles from "./SectionWelcome.module.scss"
import pokemonGroup from "../../assets/pokemonGroup.png"
import {content} from "./SectionWelcomeData.ts"
import {SectionWelcomeTitle} from "./SectionWelcomeTitle.tsx"
import {SectionsBodyContent} from "../SectionsBodyContent.tsx"
import {SectionsTitle} from "../SectionsTitle.tsx"

export const SectionWelcome = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <SectionsTitle>
                    <SectionWelcomeTitle title={content.title} highLight={content.highLight}/>
                </SectionsTitle>
                <SectionsBodyContent body={content.body}/>
            </div>
            <img
                className={styles.image}
                src={pokemonGroup}
                alt="Pokemon Group"
            />
        </section>
    )
}
