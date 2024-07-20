import { useRecoilState } from "recoil";
import { counterState } from "../states/counterAtom";

const useCounter = () => {
    const [count, setCount] = useRecoilState(counterState);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return {
        count,
        increment,
        decrement
    }
}

export default useCounter;