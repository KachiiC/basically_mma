import React from 'react'
// Components
import { Table } from 'semantic-ui-react'
import SemanticTableCell from './SemanticTableCell'

interface dataProps {
    headings: {
        heading_1: string;
        heading_2: string;
    };
    color_code: {
        column_1: string; 
        column_2: string;
    }
    list: {
        column_1: string;
        column_2: string;
    }[]

}

interface Props {
    data: dataProps
}

const TableBody = (props : Props) => {

    const ProsConsLogic = props.data.list.map((point, index) => {

        const pointRow = Object.values(point)

        const pointColor = Object.values(props.data.color_code)

        const pointContent = pointRow.map((content, index) => (
                <SemanticTableCell 
                    key={index}
                    color={pointColor[pointRow.indexOf(content)]}
                    content={content}
                />
            )
        )

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