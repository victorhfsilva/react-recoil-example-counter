import { selector } from "recoil";
import { counterState } from "./counterAtom";

export const doubleCounterState = selector<number>({
    key: 'doubleCounterState',
    get: ({ get }) => {
        const count = get(counterState);
        return count * 2;
    }
})

export const tripleCounterState = selector<number>({
    key: 'tripleCounterState',
    get: ({ get }) => {
        const count = get(counterState);
        return count * 3;
    }
})