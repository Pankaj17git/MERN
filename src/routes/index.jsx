import { BrowserRouter, Route, Routes } from "react-router"
import UserForm from "../pages/form1.jsx"
import Apis from "../pages/apis.jsx";
import App from "../App";
import Form from "../pages/form.jsx";
import Practice from "../pages/practice.jsx";
function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm/>} />
        <Route path="/form" element={<Apis/>} />
        <Route path="/apis" element={<App/>} />
        <Route path="/bookshelf" element={<Form/>} />
        <Route path="/practice" element={<Practice/>} />
        <Route path="/form1" element={<h1>Form 1 Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Path;