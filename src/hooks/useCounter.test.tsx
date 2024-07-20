import { RecoilRoot } from "recoil";
import useCounter from "./useCounter"
import { renderHook } from "@testing-library/react";
import { act } from "react";

describe('counterHook test', () => {

    test('given a counter, when I increment the state, the count must be incremented', () => {
        const { result } = renderHook(() => useCounter(), {
            wrapper: RecoilRoot
        });

        expect(result.current.count).toBe(0);
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    })

    test('given a counter, when I decrement the state, the count must be decremented', () => {
        const { result } = renderHook(() => useCounter(), {
            wrapper: RecoilRoot
        });

        expect(result.current.count).toBe(0);
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(-1);
    })

})