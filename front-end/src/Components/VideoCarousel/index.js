import React from 'react'
import BellatorFights from './BellatorFights'
import FightHighlights from './FightHighlights'
import UFCFights from './UFCFights'

function VideoCarousel () {
    
    return (
        <>
            <BellatorFights />
            <UFCFights />
            <FightHighlights />
        </>
    )
}

export default VideoCarousel;