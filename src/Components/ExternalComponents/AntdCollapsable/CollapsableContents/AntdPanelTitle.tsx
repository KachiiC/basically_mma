import React from 'react'

interface Props {
    title: string;
}

const AntdPanelTitle = (props: Props) => (
    <div className="panel-title">
        {props.title}
    </div>
)

export default AntdPanelTitle