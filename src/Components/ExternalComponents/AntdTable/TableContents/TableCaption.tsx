import React from 'react'

interface Props {
    index: number;
    info: any;
}

const TableCaption = (props: Props) => (
    // For Each Caption, it returns the info and "* =" based on index
    <>
        <small>
            {"*".repeat(props.index + 1)} = {props.info}
        </small>
        <br/>
    </>
)

export default TableCaption