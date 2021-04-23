import React from "react"
//Components
import {Table} from 'antd';

const AntdTable = (props) => {

    const table_info = props.captions.map((info, index) => (
            <>
                <small key={index}>
                {"*".repeat(index + 1)} = {info}
                </small>
                <br/>
            </>
        )
    )

    return (
        <div className="w-90 m-auto">
            <h4>{props.title}</h4> 
                <Table 
                    className="weight-class-table" 
                    columns={props.columns} 
                    dataSource={props.data} 
                    pagination={props.pagination}
                />
            {table_info}
        </div>
    )
}

export default AntdTable;