import { BrowserRouter, Route, Routes } from "react-router"
import UserForm from "../pages/form1.jsx"
import Apis from "../pages/apis.jsx";
import App from "../App";
import Form from "../pages/form.jsx";
import Practice from "../pages/practice.jsx";
import Chat from "../pages/chatPage.jsx";
function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm/>} />
        <Route path="/form" element={<Apis/>} />
        <Route path="/apis" element={<App/>} />
        <Route path="/Chat" element={<Chat/>} />
        <Route path="/bookshelf" element={<Form/>} />
        <Route path="/practice" element={<Practice/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Path;