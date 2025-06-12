import { BrowserRouter, Route, Routes } from "react-router"
import UserForm from "../components/form1.jsx"
import Apis from "../components/apis";
import App from "../App";
function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm/>} />
        <Route path="/form" element={<Apis/>} />
        <Route path="/apis" element={<App/>} />
        <Route path="/form1" element={<h1>Form 1 Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Path;