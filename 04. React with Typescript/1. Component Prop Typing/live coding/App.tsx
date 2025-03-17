import Button from "./components/Button";

const App = () => {
  return (
    <>
      <Button
        label="Click"
        onClick={() => console.log("Clicked")}
        disabled={false}
      />
    </>
  );
};
export default App;
