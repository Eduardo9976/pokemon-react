import {useState, useEffect, FC, useCallback} from 'react'
import styles from './SectionDiversity.module.scss'

interface Props {
    title: string
    description: string
    imgPath: string
    nameClass?: string
}

export const SectionDiversityCard: FC<Props> = ({ title, description, imgPath, nameClass = '' }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null)

    const fetchImage = useCallback(async () => {
        try {
            const {default: url} = imgPath && await import(imgPath)
            setImageUrl(url)
        } catch {
            setImageUrl(null)
        }
    }, [imgPath])

    useEffect(() => {
        fetchImage()
    }, [fetchImage])

    return (
        <div className={`${styles.card} ${nameClass && styles[nameClass]}`}>
            <h2>{title}</h2>
            <p>{description}</p>
             <div className={styles.imgContainer}>
                 {imageUrl && <img src={imageUrl} alt="Card"/>}
             </div>
        </div>
    )
}
