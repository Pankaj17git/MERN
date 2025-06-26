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
// eslint-disable-next-line react-refresh/only-export-components
export {UserContext, Name, useNameContext};