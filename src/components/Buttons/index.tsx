import Link from "next/link"
import { IPropsButton } from "./button.type"

const Button = (props: IPropsButton) => {
    return (
        <Link href={`${props.href}`}>
            <div onClick={props.onClick} className={`hover:bg-blue-100 ${props.active ? "bg-blue-200" : "bg-gray-100"} hover:cursor-pointer border border-blue-400 rounded-full px-5 py-2`}>{props.name}</div>
        </Link>
    )
}

export default Button