// CSS
import './ProsConsList.css'
// PROPS
import { ProsConsListProps } from 'Props/Components/ProsConsListProps'
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
import { FilterTool } from "Tools/ObjectDataTools"

const ProsConsList = (props: ProsConsListProps) => {

    const { cons, data, pros } = props
    
    const displayedPoints = () => {

        const pro_points = FilterTool(data, "type", "pro")
        const con_points = FilterTool(data, "type", "con")

        return pro_points.map((obj) => {

            const conLogic = con_points[pro_points.indexOf(obj)].point

            return (
                <tr key={`pro-con-point-${pro_points.indexOf(obj)}`}>
                    <td>{obj.point}</td>
                    <td>{conLogic}</td>
                </tr>
            )
        })
    }

    return (
        <table className="pros-cons-list w-80">
            <tbody>
                <tr>
                    <th>{RenderLogic(pros, "PROS")}</th>
                    <th>{RenderLogic(cons, "CONS")}</th>
                </tr>
                {displayedPoints()}
            </tbody>
        </table>
    )
}

export default ProsConsList
