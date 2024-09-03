import type {FC, ReactNode} from "react"

interface Props {
    children?: ReactNode
    className?: string
    title?: string
}

export const SectionsTitle: FC<Props> = ({ children, className = '', title = '' }) => {
    return (
        <>
            {children ? children : <h1 className={className}>{title}</h1>}
        </>
    )
}
