import { useCounter } from "./store";

const OtherComponent = () => {
  const { increment, decrement } = useCounter();
  return (
    <>
      <button
        className="bg-blue-500 p-4 text-white rounded-2xl font-bold"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="bg-pink-500 p-4 rounded-2xl text-white font-bold"
        onClick={decrement}
      >
        Decrement
      </button>
    </>
  );
};
export default OtherComponent;
