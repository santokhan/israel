import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export function Green(props: Props) {
    return (
        <button type="button" className={["text-white bg-app-green font-medium text-sm px-4 py-2 text-center whitespace-nowrap hover:opacity-80"].join(" ")}>{props.children}</button>
    )
}
export function Brown(props: Props) {
    return (
        <button type="button" className={["font-medium text-sm px-4 py-2 whitespace-nowrap bg-app-brown text-app-light-pink hover:opacity-80"].join(" ")}>{props.children}</button>
    )
}

export default { Green, Brown }