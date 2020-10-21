import React from 'react'
// Components
import SiteSidebarShort from '../../../Components/SiteSidebar/SiteSidebarShort'

const WhatIsMMA = () => (
        <div className="site-row">
            <div className="main-container">
                <h1>What is MMA?</h1>
                <p>
                    <b>Mixed Martial Arts (MMA)</b> is a full-contact combat sport that allows a wide variety of 
                    fighting techniques and skills from a mixture of other combat sports to be used in competition. 
                    The rules allow usage of both striking and grappling techniques while standing and on the ground. 
                    Competitions allow athletes of different martial arts disciplines to compete.
                    Although originally promoted as a competition to find the most effective martial arts for real 
                    unarmed combat, competitors from different fighting styles were pitted against one another 
                    in contests with relatively few rules. Later, individual fighters incorporated multiple 
                    martial arts into their style. 
                </p>
                <p>
                    Mixed martial arts is (by definition) the ability to mix serval disciplines whilst competing. 
                    In the early days of mixed martial arts, fighters only knew how to do one thing. They never 
                    really “mixed” the martial arts as the name of the sport would indicate they might. As the 
                    sport has evolved, fighters have learned the importance of being great at multiple fighting 
                    disciplines. Understanding which forms of martial arts a fighter excels at and which they lack 
                    in is important to help you understand what their game plan is going to be. What is MORE 
                    important is to know how that style is going to match up with their opponent’s style (or styles) 
                    and which is going to be more effective.
                </p>
                <div className="video-container">
                    <h4>The First UFC event</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sXm16YmM0BQ" 
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture" allowFullScreen title="ufc 1" />                
                </div>
            </div>
            <SiteSidebarShort videos="3"/>
        </div>
    )

export default WhatIsMMA