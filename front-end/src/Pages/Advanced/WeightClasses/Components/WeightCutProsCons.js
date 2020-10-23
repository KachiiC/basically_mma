import React from 'react'
// Data
import WeightCutProsCons from '../../../../Data/Advanced/WeightClasses/WeightProsConsData'
// Components
import {Icon, Table } from 'semantic-ui-react'

const WeightCutProsAndCons = () => {

    const ProsAndCons = WeightCutProsCons.map((point, index) => (
        <Table.Row key={index}>
            <Table.Cell className="weight-cut-pros">{point.pro}</Table.Cell>
            <Table.Cell className="weight-cut-cons">{point.con}</Table.Cell>
        </Table.Row>
    ))     

  return (
      <>
        <h3>Pros and Cons of Weight Cutting</h3>
        <div className="pros-cons-container">
            <Table celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>The more weight you cut... <Icon name='checkmark' /></Table.HeaderCell>
                        <Table.HeaderCell>Cutting too much weight will... <Icon name='crossmark' /></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {ProsAndCons}
                </Table.Body>
            </Table>
        </div>
      </>

  )
}

export default WeightCutProsAndCons