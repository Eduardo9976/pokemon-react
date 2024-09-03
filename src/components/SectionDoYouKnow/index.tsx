import styles from "./SectionDoYouKnow.module.scss"
import pokemons02 from "../../assets/pokemons02.png"
import {content} from "./SectionDoYouKnowData"
import {SectionsBodyContent} from "../SectionsBodyContent.tsx"
import {SectionsTitle} from "../SectionsTitle.tsx"

export const SectionDoYouKnow = () => {
    return (
        <section className={styles.container}>
            <img
                className={styles.image}
                src={pokemons02}
                alt="Pokemon Group"
            />
            <div className={styles.content}>
                <SectionsTitle title={content.title} className={styles.title}/>
                <SectionsBodyContent body={content.body} />
            </div>
        </section>
    )
}
