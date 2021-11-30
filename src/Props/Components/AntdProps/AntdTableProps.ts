import { objectData } from "Props/PropsTemplates";

export interface sortStringProps {
    [x: string]: string
}

export interface sortIntProps {
    [x: string]: number 
}

export interface defaultColumnProps { 
    [x: string]: string | number 
}

export interface AntdTableColumnProps {
    align?: string
    dataIndex: string
    defaultSortOrder?: "ascend" | "descend"
    sorter?: Function
    title: string
}


export interface AntdTableProps {
    columns?: AntdTableColumnProps
    data: objectData[]
    default_sort?: string
    pagination?: boolean
    title?: string
}