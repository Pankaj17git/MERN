import { createContext } from "react";

const UserContext = createContext();

const Name = ({children}) => {
  const name = 'pankaj';
  return (
    <UserContext value={name}>
      {children}
    </UserContext>
  )
}
export {UserContext, Name};