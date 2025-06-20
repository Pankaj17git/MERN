import {UserContext} from "../context/practiceContext";

export default function Section({ level, children }) {
  return (
    <UserContext value={level}>
      {children}
    </UserContext>
  );
}