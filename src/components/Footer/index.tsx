import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>©Eduardo Fernandes</p>
            <ul>
                <li><a href="https://eduardo9976.github.io/apresentacao" target="_blank"><i
                    className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/eduardo-fernandes-66924289/" target="_blank"><i
                    className="fab fa-linkedin-in"></i></a></li>
                <li><a href=" https://api.whatsapp.com/send?phone=5511992623645" target="_blank"><i
                    className="fab fa-whatsapp"></i></a></li>
            </ul>
        </footer>
    )
}
