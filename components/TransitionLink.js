import Link from "next/link";
const TransitionLink = ({isTransition, url, children}) => {

    return isTransition ? (
        <Link href={url} target = "_blank">
            {children}
        </Link>
    ) : (
        <Link href={url}>
            {children}
        </Link>
    )
}

export default TransitionLink;