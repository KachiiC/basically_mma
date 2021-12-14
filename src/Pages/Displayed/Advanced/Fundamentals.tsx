// COMPONENT
import SiteTabs from "@components/SiteTabs"
// DATA
import FundamentalsData from "@data/Advanced/Pages/Fundamentals"

const Fundamentals = (
    <>
        <p>
            Mixed Martial Arts has many fundamentals that an individual must learn in order to be 
            successful on both a professional and amateur level. A beginner will need to learn 
            basic striking and grappling techniques, become well conditioned and develop an 
            understanding of nutrition. It is important to take into account that not all beginners 
            will be equal, some will be more athletically gifted and some may be more committed to 
            learning. Beginners will have different body shapes and sizes so it will important to 
            figure out the advantages of your body type when prioritising what you want to be 
            good at. For example, short and stocky fighters are more likely to be powerful 
            strikers and stronger grapplers, tall and skinny fighters can develop into good 
            counter strikers and have better leverage when it comes to choke submissions.
        </p>
        <p>
            Fighters transitioning from another martial art will have a general understanding 
            of some of the fundamentals. Let’s take a boxer transitioning to MMA as an example, 
            a well trained boxer would probably have a good understanding of how to strike, the 
            level of endurance and nutirition needed to train. This would in theory give them a 
            distinct advantage over an absolute beginner. However, a boxer will have habits such 
            as footwork or clinching when stunned that need to be corrected before becoming 
            successful at MMA. A boxer with no grappling background may still struggle against 
            a low level grappler who has only been drilling for a few months. This is not to 
            say boxers will never succeed but if your game plan is to win with strikes, then 
            an emphasis must also be placed grappling defence. Below I have outlined six 
            fundamentals which I feel are most important to fighters when competing in MMA.
        </p>
        <SiteTabs data={FundamentalsData} />
    </>
)

export default Fundamentals