import YoutubePlayer from "Components/ExternalLibraries/YoutubePlayer"

const WhatIsMMA = (
    <>
        <p>
            <b>Mixed Martial Arts (MMA)</b> is a full-contact combat sport that allows a wide variety 
            of fighting techniques and skills from a mixture of other combat sports to be used 
            in competition. The rules allow usage of both striking and grappling techniques 
            while standing and on the ground. Competitions allow athletes of different martial 
            arts disciplines (such as boxing and wrestling) to compete against one another.
        </p>
        <h4>How did MMA start?</h4>
        <p>
            Originally promoted as a competition with very few rules to find the most effective 
            martial arts for unarmed combat. The early days of the UFC and Pride FC, promoters 
            would get martial artist who represented that combat sports to fight each other. 
            However, as the sport evolved fighters would incorporate multiple martial arts into 
            their style. Mixed martial arts is (by definition) the ability to mix serval disciplines 
            whilst competing.
        </p>
        <h4>Here is a brief explaination!</h4>
        <YoutubePlayer 
            id={`LNySNc76NNU`} 
            width="90%" 
        />
        <h4>The Sport today</h4>
        <p>
            Although the sport is less than 30 years old, MMA has been one of the fastest rising 
            sports in the world for the better part of the last two decades. In modern times, 
            it is a mainstream sport that enjoys a massive following from millions of people 
            all over the world in all continents. MMA has produced stars that have transcended 
            the sport including <i>Conor McGregor, Ronda Rousey and Gina Carano.</i>
        </p>
    </>
)

export default WhatIsMMA