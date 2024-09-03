import type {FC, ReactNode} from "react"

interface BodyContentProps {
    body?: string[]
}

interface Props extends BodyContentProps {
    children?: ReactNode
}

const ContentMapper: FC<BodyContentProps> = ({ body }) => {
    return (
        <>
            {body?.map((paragraph, index) => (
                <p key={index}>
                    {paragraph}
                </p>
            ))}
        </>
    )
}

export const SectionsBodyContent: FC<Props> = ({children, body = []}) => {
    return (
        <>
            {children ? children : <ContentMapper body={body} />}
        </>
    )
}
