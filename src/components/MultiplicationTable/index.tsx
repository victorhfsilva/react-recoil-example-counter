import { useRecoilValue } from "recoil"
import { doubleCounterState, tripleCounterState } from "../../states/conterSelector"

const MultiplicationTable: React.FC = () => {
    const doubleCount = useRecoilValue(doubleCounterState)
    const tripleCount = useRecoilValue(tripleCounterState)

    return (
        <div>
            <h1>Multiplication Table</h1>
            <h2>Double Counter: {doubleCount}</h2>
            <h2>Triple Counter: {tripleCount}</h2>
        </div>
    )
}

export default MultiplicationTable;