// COMPONENTS
import AntdTable from "Components/ExternalLibraries/AntdTable"
import ProsConsList from "Components/PageComponents/ProsConsList"
// DATA
import { WeightClassesData, WeightCutProConsData } from "Data/Main/Displayed/Advanced/Pages/WeightClasses"

export const WeightClassTables = <AntdTable data={WeightClassesData} />

export const WeightCutProsAndCons = (
    <ProsConsList data={WeightCutProConsData} 
        pros="The more weight you cut..."
        cons="Cutting too much weight will..."
        title="Pros and Cons of Weight Cutting"
    />
)