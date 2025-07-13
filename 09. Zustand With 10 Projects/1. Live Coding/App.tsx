import OtherComponent from "./OtherComponent";
import { useCounter } from "./store";

const App = () => {
  const { count } = useCounter();
  return (
    <div className="">
      <h1 className="text-3xl font-bold   ">Count {count}</h1>
      <div className="flex gap-5">
        <OtherComponent />
      </div>
    </div>
  );
};
export default App;
