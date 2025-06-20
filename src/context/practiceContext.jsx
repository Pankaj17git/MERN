import { createContext , useContext} from "react";

const UserContext = createContext();

const Name = ({children}) => {
  const name = 'pankaj';
  return (
    <UserContext value={name}>
      {children}
    </UserContext>
  )
}
 
const useNameContext = () => useContext(UserContext);
export {UserContext, Name, useNameContext};