import React from 'react'
// CSS
// Components
import {Icon, Table } from 'semantic-ui-react'

const WeightCutProsAndCons = () => {

  return (
      <>
        <h5>Pros and Cons of Weight Cutting</h5>
        <div className="pros-cons-container">

            <Table celled fixed>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>The more weight you cut... <Icon name='checkmark' /></Table.HeaderCell>
                    <Table.HeaderCell>Cutting too much weight will... <Icon name='crossmark' /></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>

                <Table.Row>
                    <Table.Cell className="weight-cut-pros">The more likely you are to have size advantage over your oponnent.</Table.Cell>
                    <Table.Cell className="weight-cut-cons"> Drastic weight cuts will diminish more of your cardio during the fight.</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell className="weight-cut-pros">The more likely you are to have a strength advantage over your oponnent in the grappling exchanges.</Table.Cell>
                    <Table.Cell className="weight-cut-cons">Less water in your brain from dehydration means you are far more susceptible to damage during the fight.</Table.Cell>
                </Table.Row>
                
                <Table.Row>
                    <Table.Cell className="weight-cut-pros">The more it builds discipline in the lead up to the fight.</Table.Cell>
                    <Table.Cell className="weight-cut-cons">It will have long term effects on the health of your kidney.</Table.Cell>
                </Table.Row>

            </Table.Body>
            </Table>
        </div>
      </>

  )
}

export default WeightCutProsAndCons