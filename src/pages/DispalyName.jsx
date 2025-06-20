import MyComponent from "../components/Name"
import { Name } from "../context/practiceContext"

const DisplayName = ()=> {

  return (
    <>
      <Name>    { /*THIS is your Provider!*/ }
        <MyComponent/>  { /*THIS uses `useContext`*/ }
      </Name>
    </>
  )
}

export default DisplayName