import styles from "./SectionCuriosity.module.scss"
import pokemons01 from "../../assets/pokemons01.png"
import {content} from "./SectionCuriosityData.ts"
import {SectionsBodyContent} from "../SectionsBodyContent.tsx"
import {SectionsTitle} from "../SectionsTitle.tsx"

export const SectionCuriosity = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <SectionsTitle title={content.title} className={styles.title}/>
                <SectionsBodyContent body={content.body}/>
            </div>
            <div className={styles.imageContainer}>
                <img
                    src={pokemons01}
                    alt="Pokemons"
                />
            </div>
        </section>
    )
}
