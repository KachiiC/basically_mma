//COMPONENTS
import { Table } from 'antd';
// CSS
import 'antd/dist/antd.css'
import './AntdTable.css'
// PROPS
import { AntdTableProps } from 'Props/Components/AntdProps/AntdTableProps';
// TOOLS
import { defaultColumn } from './tools/AntdColumns';
import { IfStatement, RenderLogic } from "Tools/FunctionTools";

const AntdTable = (props: AntdTableProps) => {

    const { columns, data, default_sort, pagination, title } = props

    const columnsLogic = RenderLogic(
        columns, 
        defaultColumn(
            data, IfStatement(default_sort)
        )
    )

    return (
        <div className="site-antd-table w-90">
            <h1>{IfStatement(title)}</h1>
            <Table 
                columns={columnsLogic} 
                dataSource={data} 
                pagination={RenderLogic(pagination, false)}
            />
        </div>
    )
}

export default AntdTable;