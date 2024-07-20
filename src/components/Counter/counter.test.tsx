import { fireEvent, render, screen } from "@testing-library/react";
import useCounter from "../../hooks/useCounter";
import { RecoilRoot } from "recoil";
import Counter from ".";

jest.mock('../../hooks/useCounter');
const useCounterMock = useCounter as jest.Mock;

describe('Counter Component Test', () => {

    beforeEach(() => {
        useCounterMock.mockClear();
    });


    test('given the counter screen, when screen is initialize, the count must be present correctly', () => {

        useCounterMock.mockReturnValue({
            count: '0',
        })

        render(
            <RecoilRoot>
                <Counter />
            </RecoilRoot>
        )

        const count = screen.getByText("Counter: 0");
        expect(count).toBeInTheDocument();
    });

    test('given the counter screen, when increment is pressed, the count must be incremented', () => {
        const incrementMock = jest.fn()
        const decrementMock = jest.fn()

        useCounterMock.mockReturnValue({
            count: '0',
            increment: incrementMock,
            decrement: decrementMock
        })

        render(
            <RecoilRoot>
                <Counter />
            </RecoilRoot>
        )

        const incrementButton = screen.getByText('Increment')
        fireEvent.click(incrementButton)
        expect(incrementMock).toHaveBeenCalled()
    });

    test('given the counter screen, when decrement is pressed, the count must be decremented', () => {
        const incrementMock = jest.fn()
        const decrementMock = jest.fn()

        useCounterMock.mockReturnValue({
            count: '0',
            increment: incrementMock,
            decrement: decrementMock
        })

        render(
            <RecoilRoot>
                <Counter />
            </RecoilRoot>
        )

        const decrementButton = screen.getByText('Decrement')
        fireEvent.click(decrementButton)
        expect(decrementMock).toHaveBeenCalled()
    });
})