export interface IDataButton {
    id: number,
    name: string,
}

export interface IPropsButton {
    href: string,
    name: string,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    active?: boolean
    textTransform?: boolean
}