// COMPONENTS
import AntdTable from "Components/ExternalLibraries/AntdTable"
import ProsConsList from "Components/PageComponents/ProsConsList"
// DATA
import { WeightClassesData, WeightCutProConsData } from "Data/Main/Displayed/Advanced/Pages/WeightClasses"

const WeightClasses = () => {
    
    return (
        <>
            <p>
                Before weight classes existed, fighters would compete in open weight tournments. In a 
                time where the sport did not yet have a name and prior to state sanctioning, weight 
                classes were not mandatory since the competitions were held without the approval of 
                the athletic commissions. The UFC first introduced two weight classes at UFC 12, 
                which grouped competitors above 200 lb (91 kg) as heavyweights and competitors under 
                200 lb as lightweights. Weight divisions underwent many changes in the years to 
                follow, but the ability for promotions to autonomously decide their own weight 
                classes eventually disappeared after athletic commissions began supervising 
                mixed martial arts.
            </p>
            <p>
                In 2000, the Unified Rules of Mixed Martial Arts were codified by the New Jersey State 
                Athletic Commission. The California State Athletic Commission had worked extensively 
                on regulation, but their sanctioning of MMA was not implemented due to state 
                governmental issues surrounding the process. California officially sanctioned MMA 
                on December 28, 2005, using the ruleset it helped devise five years previously. 
                Since then, to create uniformity, all state commissions in the United States 
                that regulate mixed martial arts have assimilated these rules into their 
                existing unarmed combat competition rules and statutes. For a promotion to hold 
                mixed martial arts events in a state-sanctioned venue, the promotion must abide 
                by the state athletic commission's body of rules for weight limits.
            </p>
            <AntdTable data={WeightClassesData} />
            <h2>Pros and Cons of Weight Cutting</h2>
            <ProsConsList data={WeightCutProConsData} 
                pros="The more weight you cut..."
                cons="Cutting too much weight will..."
            />
            <h2>Weight Classes Outside of the United States</h2>
            <p>
                With no state or government laws regarding weight class restrictions, organizations 
                in other countries are free to schedule bouts with little regard for weight 
                differential. However, due to the increasingly competitive and international 
                nature of the sport, weight limits have been set by the promotions themselves 
                usually in alignment with the Unified Rules, as maintaining standard weight 
                classes is seen as fair and standard for all competitors.
            </p>
            <h2>One Championship</h2>
            <p>
                One Championship have banned weight-cutting by dehydration in order to promote 
                fighter safety after the death One of their athletes Yang Jian Bing. The 
                promotion’s revised policy on weight after Yang (a 21 year old Chinese Fighter) 
                passed away as a result of dehydration during his weight cut in December 2015.
            </p>
            <p>
                Unlike most MMA organisations, One Championship monitors their athletes during 
                training camp and have urine specific gravity tests to ensure they are hydrated 
                up to three hours ahead of their bouts. The weight limits are now based on a 
                competitor's "walking weight", rather than their pre-fight weigh-ins weight 
                like most promotions. Since the new measures took effect, there have been no 
                further serious incidents. The new system was well received by athletes in the 
                organisation, as well as other stakeholders in the MMA industry.
            </p>
        </>
    )
}

export default WeightClasses