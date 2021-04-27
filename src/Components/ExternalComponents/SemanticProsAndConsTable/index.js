import React from 'react'
// Components
import { Table } from 'semantic-ui-react'
import SemanticTableHeadings from './TableComponents/SemanticTableHeadings'
import SemanticTableBody from './TableComponents/SemanticTableBody'

const SemanticProsAndCons = (props) => (

    <div className="w-90 m-auto">
        <h3>Pros and Cons of Weight Cutting</h3>
        <div className="pros-cons-container">
            <Table celled fixed>
                <SemanticTableHeadings data={props.data} />
                <SemanticTableBody data={props.data} />
            </Table>
        </div>
    </div>
)

export default SemanticProsAndCons