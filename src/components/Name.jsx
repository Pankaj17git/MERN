import { useNameContext} from "../context/practiceContext";

const MyComponent = () => {
  const name = useNameContext()
  console.log(name);
  
  return <h1>Hello, {name}</h1>;
};

export default MyComponent;