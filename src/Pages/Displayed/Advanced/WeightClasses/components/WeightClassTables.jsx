// COMPONENTS
import AntdTable from "@libraries/AntdTable"
import ProsConsList from "@page_components/ProsConsList/"
// DATA
import { WeightClassesData, WeightCutProConsData } from "@data/Advanced/Pages/WeightClasses"

export const WeightClassTables = <AntdTable data={WeightClassesData} />

export const WeightCutProsAndCons = (
    <ProsConsList data={WeightCutProConsData} 
        pros="The more weight you cut..."
        cons="Cutting too much weight will..."
        title="Pros and Cons of Weight Cutting"
    />
)