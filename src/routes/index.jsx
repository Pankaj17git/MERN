import { BrowserRouter, Route, Routes } from "react-router"
import UserForm from "../pages/form1.jsx"
import Apis from "../pages/apis.jsx";
import App from "../App";
import Form from "../pages/form.jsx";
import Practice from "../pages/practice.jsx";
import { useState } from "react";
import Chat from "../pages/chatPage.jsx";
import UserContext from "../context/practiceContext.jsx";
function Path() {
  const [name] = useState('Pankaj');
  return (
    <UserContext.Provider value={name}>
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
    </UserContext.Provider>

  );
}

export default Path;