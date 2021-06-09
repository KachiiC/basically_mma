import React from 'react'
import {Link} from 'react-router-dom'
// COMPONENTS
import { List } from 'antd';
// DATA
import foulData from 'Data/Basics/RulesOfMMA/RulesComponents/FoulsData'
import WeightTable from 'Pages/Advanced/WeightClasses/PageComponents/WeightTable'

//// SECTIONS ////
const Attire = (
    <>
        <p>
            All competitors must fight in approved shorts, without shoes or any other sort 
            of foot padding. Shirts, gis or long pants (including gi pants) are not allowed. 
            Fighters must use approved light gloves (4–6 ounces) that allow fingers to grab.
        </p>
        <p>
            A mouthguard and protective cup (in the case of men) are also required and are 
            checked by a State Athletic Committee official before being allowed to enter the 
            cage/ring. Furthermore, approved leg and chest (in the case of women) protectors must 
            be provided by the contestant.
        </p>
    </>
)

const BoutDuration = (
    <>
        <p>
            Every round is 5 minutes in duration with a one-minute rest period in-between rounds. 
            Non-title matches must not normally exceed three rounds, but the governing commission 
            can grant dispensation for non-title five round bouts. Title matches can be sanctioned 
            for five rounds.
        </p>
    </>
)

const FoulRules = (
    <>
        <p>
            MMA isn't a no holds barred (no rules or restrictions apply in a conflict or 
            disputed), competition, there are a long list of rules that fighters must follow 
            when they enter the cage/ring.
        </p>
        <List
            className="rules-foul-container"
            bordered
            dataSource={foulData}
            renderItem={item => (
                <List.Item>
                    {item}
                </List.Item>
            )}
        />
    </>
)

const MedicalRequirements = (
    <>
        <p>
            Athletes must complete all pre-licensure medical examinations and tests required 
            by the athletic comission licensing the contest. The commission conducts/supervise 
            all pre-contest weigh-ins and present throughout fight week during rules meeting.
        </p>
        <p>
            Immediately following a contest, each contestant is given a medical examination 
            by a physician appointed by the commission. The medical examination includes any 
            examinations or tests the commission deems necessary to determine the post-contest 
            physical fitness of the athletes. Refusing to submit to a post-contest 
            medical examination leads to a suspension for the athele.
        </p>
    </>
)

const MethodsOfVictory = (
    <>
        <p> There are multiple ways to win in Mixed Martial Arts.</p>
        <p> <b>Knockout</b>: Athlete is knocked unconscious due to strikes or impact. <br />
            <b>Technical Knockout</b>: The referee stops the contest.<br />
            <b>Submission</b>: Physical or verbal tap out. <br />
            <b>Technical Submission</b>: The referee stops the contest to prevent further submission damage.<br />
        </p>

        <p>
            If no fighter is finished during the allocated rounds, the fight will go to 
            the three judges who win score based on striking, effective grappling and ring control.
        </p>
        <p><b>Judges Decisions will result in one of the following outcomes:</b></p>
        <p><b>Unanimous</b>: All 3 judges pick the same athlete as the winner.<br />
            <b>Split</b>: 2 judges score the fight for one athlete, the other 
            judge scores it for the other athlete.<br />
            <b>Majority</b>: 2 judges score the fight for one athlete, the other 
            judge scores it as a draw.
        </p>
        
        <p>The fight can also be scored as a draw (via unanimous, majority or split decision).</p>
    </>
)

const ProhibitedSubstances = (
    <>
        <p>
            The use of any illegal drug, narcotic, stimulant, depressant, or analgesic of any 
            description, or alcohol substance, by a contestant either before or during a match, 
            shall result in the immediate disqualification of the athlete with disciplinary 
            action taken (usually in the form of a ban and/or fine).
        </p>
        <p>
            <b>Testing of prohibited substances: </b> 
            Promotions will test for prohibited substance, atheletes submit to any pre-contest 
            or post-contest urinalysis or other laboratory procedure that is ordered by the 
            athletic commission. Some promotions such as the UFC require also require out of 
            competition testing
        </p>
    </>
)

const WeightClassRules = ( 
    <>
        <p>Although some organisations choose to use their own weight classes, these are 
            the weight classes used by the majority promotions in sanctioned bouts. 
            Some bout may be contested in a catchweight, either because one fighter has 
            missed weight or the bout is on short notice. More details regarding weight classes 
            can be found <Link to="/basically_mma/weight-classes">here.</Link>
        </p>
        {WeightTable}
    </>
)

//// Rules Data ////
export const RulesOfMMAData = [
    {
        title: "Methods Of Victory",
        content: MethodsOfVictory
    },
    {
        title: "Attire",
        content: Attire
    },
    {
        title: "Bout Duration",
        content: BoutDuration
    },
    {
        title: "Medical Requirements",
        content: MedicalRequirements
    },
    {
        title: "Prohibited Substances",
        content: ProhibitedSubstances
    },
    {
        title: "Fouls",
        content: FoulRules
    },
    {
        title: "Weight Classes",
        content: WeightClassRules
    }
]

export default RulesOfMMAData