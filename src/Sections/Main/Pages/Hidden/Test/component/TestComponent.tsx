// COMPONENTS
import SingleComponent from "./SingleComponent"
// PROPS
interface TestComponentProps {
    data: any[]
}

const TestComponent = (props: TestComponentProps) => {

    const allSingles = props.data.map(obj => {

        // const { title } = obj

        return (
            <SingleComponent/>
        )
    })
    
    return <>{allSingles}</>
}

export default TestComponent