import React from 'react'

const SiteParagraphFormatter = (content) => {

    return content.split('\n\n').map((value, index) => {
        if (!value) {
            return <p key={index}>{'\n\n'}</p>
        }
        return <p key={index}>{value}</p>
    })
}
    

export default SiteParagraphFormatter