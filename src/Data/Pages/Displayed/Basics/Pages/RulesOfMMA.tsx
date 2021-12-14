// COMPONENTS
import SiteTable from "Components/SiteComponents/SiteTable"
// DATA
import { WeightClassesData } from "../../Advanced/Pages/WeightClasses"

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
        <p>During the bout, the timer is stopped for the following reasons:</p>
        <ul>
            <li>
                A foul is commited by one fighter (for example a groin shot or a eye poke),
                the referee can call a halt to the action for up to 5 minutes. The fighter who commits 
                the foul will either been warned or have a point deducted based on the severity of the foul.
            </li>
            <li>
                If there a cut or injury which is a cause of concern for the referee, he can stop the timer 
                to bring in the ring side doctor who will acess the injury, if it is deemed too too severe, 
                the referee can choose to stop the bout based on the doctors advice or resume the contest.
            </li>
        </ul>
    </>
)

const FoulsList = [
    "Butting with the head",
    "Eye gouging of any kind",
    "Biting or spitting at an opponent",
    "Fish hooking (act of inserting a finger or fingers or one or both hands into the mouth or nostrils or a person, pulling away from the centerline of the body)",
    "Hair pulling",
    "Spiking an opponent to the canvas on his head or neck",
    "Strikes to the spine or the back of the head.",
    "Throat strikes of any kind, and/or grabbing the trachea",
    "Fingers outstretched toward an opponent’s face/eyes",
    "Downward pointing elbow strike (’12 to ‘6 strike)",
    "Groin attacks of any kind",
    "Kneeing and/or kicking the head of a grounded opponent",
    "Stomping a grounded opponent",
    "Holding opponent’s gloves or shorts",
    "Holding or grabbing the fence or ropes with fingers or toes",
    "Small joint manipulation",
    "Throwing opponent out of ring/fighting area",
    "Intentionally placing a finger into any orifice or any cut or laceration of an opponent",
    "Clawing, pinching or twisting the flesh",
    "Timidity (avoiding contact with an opponent, intentionally or consistently dropping the mouthpiece or faking an injury)",
    "Using abusive language in the fighting area",
    "Flagrant disregarding of the referee’s instructions",
    "Unsportsmanlike conduct that causes injury to an opponent",
    "Attacking an opponent after the bell has sounded the end of the period of unarmed combat",
    "Attacking an opponent on or during the break",
    "Attacking an opponent who is under the care of the referee",
    "Interference from a mixed martial artist’s corner or seconds",
]

const DisplayedFouls = FoulsList.map(foul => <li>{foul}</li>)

const Fouls = (
    <>
        <p>
            Disqualification may occur after any combination of fouls or after a flagrant foul at the 
            discretion of the referee. Fouls may result in a point being deducted by the official 
            scorekeeper from the offending contestant’s score. The scorekeeper, not the judges, 
            will be responsible for calculating the true score after factoring in the point deduction.
            Only a referee can assess a foul. If the referee does not call the foul, judges must not 
            make that assessment on their own and should not factor such into their scoring calculations.
        </p>
        <p>
            The following acts constitute fouls in a contest or exhibition of mixed martial arts and 
            may result in penalties, at the discretion of the referee, if committed:
        </p>
        <ul>
            {DisplayedFouls}
        </ul>
    </>
)

const MedicalRequirements = (
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
            <b>Use of prohibited substances:</b> The use of any illegal drug, narcotic, 
            stimulant, depressant, or analgesic of any description, or alcohol substance, 
            by a contestant either before or during a match, shall result in the immediate 
            disqualification of the contestant from the match and disciplinary action in 
            accordance with the commission licensing the contest.
        </p>
        <p>
            <b>Detection of prohibited substances:</b> In order to detect the presence of any 
            prohibited substance, a contestant shall submit to any pre-contest or post-contest 
            urinalysis or other laboratory procedure that is ordered by the physician appointed 
            by the commission. Refusal to submit to such testing shall result in the immediate 
            disqualification of the contestant from the match and an indefinite suspension from 
            the sport of MMA.
        </p>
        <p>
            All contestants may be ordered to complete a pre-contest urinalysis exam to detect the 
            presence of any drug. In addition to a pre-contest analysis, the local commission may, 
            at its discretion, decide to test for the presence of performance-enhancing drugs and 
            thereby require additional urine specimens to be produced at any time after the completion 
            of the contest.
        </p>
        <p>
            Collection of specimens for urinalysis testing shall be conducted or supervised by a commission 
            official. Refusal to submit to such testing shall result in the immediate disqualification of 
            the contestant from the match and an indefinite suspension from the sport of MMA.
        </p>
    </>
)


const WeightClasses = (
    <>
        <p>
            Although some organisations choose to use their own weight classes, these are the weight 
            classes used by the majority promotions in sanctioned bouts. Some bout may be contested 
            in a catchweight, either because one fighter has missed weight or the bout is on short notice.
        </p>
        <SiteTable data={WeightClassesData} />
    </>
)

//// Rules Data ////
export const RulesOfMMAData = [
    {
        title: "Attire",
        content: Attire
    },
    {
        title: "Bout Duration",
        content: BoutDuration
    },
    {
        title: "Fouls",
        content: Fouls
    },
    {
        title: "Medical Requirements",
        content: MedicalRequirements
    },
    {
        title: "Methods Of Victory",
        content: MethodsOfVictory
    },
    {
        title: "Prohibited Substances",
        content: ProhibitedSubstances
    },
    {
        title: "Weight Classes",
        content: WeightClasses
    }
]

export default RulesOfMMAData