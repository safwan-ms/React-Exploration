import { use } from "react";
const fetchData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const response = data.json();
  return response;
};
const FetchTodo = () => {
  const result = use(fetchData());
  return <div>Title:{result.title} </div>;
};
export default FetchTodo;
