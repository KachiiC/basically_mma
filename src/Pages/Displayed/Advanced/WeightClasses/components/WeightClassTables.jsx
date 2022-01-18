// COMPONENTS
import { WeightClassesData, WeightCutProConsData } from "@data/Advanced/WeightClassesData"
import AntdTable from "@libraries/AntdTable"
import ProsConsList from "Components/PageComponents/ProsConsList/"
// DATA

export const WeightClassTables = <AntdTable data={WeightClassesData} />

export const WeightCutProsAndCons = (
    <ProsConsList data={WeightCutProConsData} 
        pros="The more weight you cut..."
        cons="Cutting too much weight will..."
        title="Pros and Cons of Weight Cutting"
    />
)