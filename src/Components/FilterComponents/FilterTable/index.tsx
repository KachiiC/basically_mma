import { useState } from "react"
// COMPONENTS
import { FilterInput, FilterSelect } from "./components/FilterSearch"
import SiteTable from "@components/SiteTable"
// CSS
import "./FilterTable.css"
import { Empty } from "antd"
// PROPS
import { FilterTableProps } from "./FilterTableProps"
import { TargetProps } from "Props/Tools/ToolProps"
// TOOLS
import { ArrrayObjectKeys } from "Tools/ObjectDataTools"
import { ParseIntChecker } from "Tools/IntergerTools"
import { RenderLogic } from "Tools/FunctionTools"
import { StringJoin } from "Tools/StringTools"

const FilterTable = (props: FilterTableProps) => {

    const { 
        data, 
        default_column, 
        overflow, 
        placeholder, 
        width 
    } = props

    // COLUMNS
    // Returns each key from the first object in the array as a string.
    // ** Make sure all objects have the same keys **
    const columnOptions = ArrrayObjectKeys(data)
    // Column which can be searched can be defined, set to first key by default
    const columnLogic = RenderLogic(default_column, columnOptions[0])
    const [column, setColumn] = useState(columnLogic)

    // Column can be changed and can be set in form  
    const columnFunction = (e : TargetProps) => setColumn(e.target.value)

    // The input string used to filter
    const [input, setInput] = useState("")
    // The results which match the input, intial value is the entire data set
    const [foundResults, setFoundResults] = useState(data)

    // Width of table
    const widthLogic = RenderLogic(width, 90)
    // Placeholder for input detirmined by input search column
    const placeholderLogic = RenderLogic(placeholder,`SEARCH ${StringJoin(column, "_", " ")}S`)
    
    // Filters the data and returns the column type which begin with the same letters as input 
    const filterFunction = (e: TargetProps) => {
        const keyword = e.target.value;

        const resultsLogic = data.filter(result => 
            // Checks if input is interger or string
            ParseIntChecker(result[column]) ?
                // Returns all results which matches the input interger 
                parseInt(result[column]) === parseInt(keyword)
                : 
                // Returns all results which begin with the input string
                result[column].toLowerCase().startsWith(keyword.toLowerCase())
        )

        // Only returns results when input isn't empty
        keyword !== "" ? setFoundResults(resultsLogic) : setFoundResults(data)
        
        setInput(keyword)
    }

    // Filters the table component by input column returns "No results found!" foundResults is empty.
    const tableLogic = foundResults && foundResults.length > 0 ? 
        <SiteTable
            keys={columnOptions}
            data={foundResults} 
            overflow={RenderLogic(overflow, true)}
        />
        : 
        <Empty />

    return (
        <div className={`filter-list w-${widthLogic}`}>
            <div className="filter-search">
                <FilterSelect 
                    column_function={columnFunction}
                    data={columnOptions}
                    default_value={columnLogic}
                />
                <FilterInput 
                    on_change={filterFunction}
                    placeholder={placeholderLogic}
                    value={input}
                />
            </div>
            <div className="filter-table-container site-overflow w-100">
                {tableLogic}
            </div>
        </div>
    )
}

export default FilterTable;