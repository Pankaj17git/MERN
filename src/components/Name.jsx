import { UserContext} from "../context/practiceContext";
import { useContext } from "react";

const MyComponent = () => {
  const name = useContext(UserContext);
  console.log(name);
  
  return <h1>Hello, {name}</h1>;
};

export default MyComponent;