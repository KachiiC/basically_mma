// COMPONENTS
import SiteTableHeaders from "./components/TableHeaders"
import SiteTableRows from "./components/TableRows"
// CSS
import "./SiteTable.css"
// PROPS
import { SiteTableProps } from "./SiteTableProps"
// TOOLS
import { ArrrayObjectKeys } from "Tools/ObjectDataTools"
import { RenderLogic } from "Tools/FunctionTools"

const SiteTable = (props: SiteTableProps) => {

    const { data, keys, overflow } = props

    const overflowStyle = () => {
        if (overflow) return "site-table-overflow"
    }
    
    return (
        <div className={`site-table-container ${overflowStyle()}`}>
            <table className="site-table w-100">
                <SiteTableHeaders 
                    keys={RenderLogic(keys,ArrrayObjectKeys(data))} 
                />
                <SiteTableRows 
                    data={data} 
                />
            </table>
        </div>
    )
}

export default SiteTable