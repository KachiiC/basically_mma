import React from 'react'
// Components
import { Table } from 'semantic-ui-react'
import SemanticTableCell from './SemanticTableCell'

const TableBody = (props) => {

    const ProsConsLogic = props.data.list.map((point, index) => {

        const pointRow = Object.values(point)

        const pointColor = Object.values(props.data.color_code)
        
        console.log(pointColor)

        const pointContent = pointRow.map((content, index) => {

            // const colorLogic = pointRow.indexOf(content) === 0 ? 
            //     "#99da99" 
            //     : 
            //     "#fe8e8e"

            return (
                <SemanticTableCell 
                    key={index}
                    color={pointColor[pointRow.indexOf(content)]}
                    content={content}
                />
            )
        })

        return (
            <Table.Row key={index}>
                {pointContent}
            </Table.Row>
        )
    })

    return (
        <Table.Body>
            {ProsConsLogic}
        </Table.Body>
    )
}

export default TableBody