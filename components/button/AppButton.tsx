type Props = {
    text: string
    style: string
}

export default function AppButton({ text, style }: Props) {
    return (
        <button type="button" className={["font-medium text-sm px-4 py-2 whitespace-nowrap", style].join(" ")}>{text}</button>
    )
}