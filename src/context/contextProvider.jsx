import Practice from "../pages/practice";
import { UserContext } from "./practiceContext";

import { useState } from "react";

const PracticeUserContext = () => {
  const [name] = useState('Pankaj');

  return (
    <>
      <UserContext.Provider value={name}>
        <Practice/>
      </UserContext.Provider>
    </>
  )
};

export default PracticeUserContext;