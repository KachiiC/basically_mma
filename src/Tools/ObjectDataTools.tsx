// PROPS
import { objectData, stringDataProps } from "Props/PropsTemplates"
import { ObjectDataProps } from "Props/Tools/ToolProps"
import { StringJoin } from "./StringTools"

// Filter Tool
export const FilterTool = (data: objectData[], key: string, value: any) =>  data.filter((obj: objectData) => obj[key] === value)

// Returns keys of an object
export const ObjKeys = (input: Object) => Object.keys(input)

// Returns values of an object
export const ObjValue = (input: Object) => Object.values(input)

// Returns keys of first object
export const ArrrayObjectKeys = (data: Object[]) => ObjKeys(data[0])

// Checks if object is empty
export const EmptyObjectChecker = (obj: {}) => ObjKeys(obj).length === 0 ? true : false

// Checks if all objects in array of a particular value are unique
export const UnqiueValues = (data: any[], value: string) =>  {

    const allValues = data.map(obj => obj[value])

    const uniqueArray = allValues.filter(function(item, pos) {
        return allValues.indexOf(item) === pos;
    })

    return uniqueArray
}

export const ObjectIconDataRender = (data: stringDataProps) => {

    const data_keys = ObjKeys(data)
  
    const data_links = data_keys.map(key => {

        return {
            title: key,
            icon: key,
            link: `https://www.${key}.com/${data[key]}`
        }
    })

    return data_links
}

export const ObjectDataRender = (data: ObjectDataProps) => {

    const keys = ObjKeys(data)
  
    return keys.map(key => {

        const external_link = {
            title: key,
            external_link: data[key],
        }

        const footer_content = {
            title: key,
            content: data[key],
            link: StringJoin(key, "_", "-")
        }

        return typeof data[key] === "string" ? external_link : footer_content
    })

}