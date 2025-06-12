import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Form from './components/form.jsx'
import Practice from './components/practice.jsx'
import UserForm from './components/form1.jsx'
import Apis from './components/apis.jsx'
import Path from './routes/index.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practice /> */}
    {/* <Form /> */}
    {/* <UserForm /> */}
    {/* < Apis /> */}
    <Path />
  </StrictMode>,
)
