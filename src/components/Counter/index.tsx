import useCounter from "../../hooks/useCounter";

const Counter: React.FC = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;