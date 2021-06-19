import React from 'react'
// Components
import { Table } from 'semantic-ui-react'
import SemanticTableHeadings from './TableContents/SemanticTableHeadings'
import SemanticTableBody from './TableContents/SemanticTableBody'

interface Props {
    title: string;
    data: any;
}

const SemanticProsAndConsTable = (props: Props) => (

    <div className="w-90 m-auto">
        <h3>{props.title}</h3>
        <div className="semantic-container">
            <Table celled fixed>
                <SemanticTableHeadings data={props.data} />
                <SemanticTableBody data={props.data} />
            </Table>
        </div>
    </div>
)

export default SemanticProsAndConsTable