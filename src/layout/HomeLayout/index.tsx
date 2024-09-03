import type {ReactNode, FC} from "react"
import styles from "./HomeLayout.module.scss"
import {Header} from "../../components/Header"
import {Footer} from "../../components/Footer";

interface Props {
    children: ReactNode
}

export const HomeLayout: FC<Props> = ({children}) => {
    return (
        <main className={styles.layout}>
            <Header/>
            <div className={styles.layoutContainer}>
                {children}
            </div>
            <Footer/>
        </main>
    )
}
