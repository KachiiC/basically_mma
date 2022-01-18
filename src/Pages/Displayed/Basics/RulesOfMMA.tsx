// COMPONENTS
import SiteTabs from "@components/SiteTabs"
import { RulesOfMMAData } from "@data/Basics/RulesOfMMAData"
// DATA

const RulesOfMMA = (
    <>
        <p>
            Most rule sets for mixed martial arts competitions have evolved since the early days of UFC 1 and 
            Vale Tudo. As the knowledge about fighting techniques spread among fighters and spectators, it 
            became clear that the original minimalist rule systems needed to be amended.In order to get the 
            sport sanctioned by atletic comissions, promotions such as the UFC began to introduce more rules. 
            As rules evolved and regulations added, different branches of mixed martial arts have emerged, 
            with differences between the different rulesets dictating different strategies.
        </p>

        <p>
            The main motivations for these rule changes were to protect the health of the fighters. The stigma 
            of "barbaric, no rules, fighting-to-the-death" matches would prevent atletic comissions from 
            sanctioning if rules were not implemented.The framework of the Unified Rules of Mixed Martial 
            Arts was proposed and agreed upon by various athletic commissions in the 2000s and was unanimously 
            adopted by the Association of Boxing Commissions (ABC) on July 30, 2009.
        </p>

        <p>
            The Unified Rules of Mixed Martial Arts aim to provide a clear set of rules governing professional 
            MMA competition that remain consistent across the jurisdictions of various athletic commissions 
            and other regulatory bodies.The Unified Rules of MMA are listed below:
        </p>
        <SiteTabs data={RulesOfMMAData} width={100}/>
    </>
) 

export default RulesOfMMA