import { objectData } from "Props/PropsTemplates";

export const FilterTool = (data: objectData[], key: string, value: any) =>  data.filter((obj: objectData) => obj[key] === value)