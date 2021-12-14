// COMPONENTS
import { WeightClassTables, WeightCutProsAndCons } from "./components/WeightClassTables"
import { OneChampionship, OutsideOfUs, WeightClassIntroduction } from "./components/WeightClassText"

const WeightClasses = (
    <>
        {WeightClassIntroduction}
        {WeightClassTables}
        {WeightCutProsAndCons}
        {OutsideOfUs}
        {OneChampionship}
    </>
)

export default WeightClasses