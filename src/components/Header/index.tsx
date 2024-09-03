import logo from '../../assets/logo.png'
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Pokémon logo"/>
        </header>
    )
}
