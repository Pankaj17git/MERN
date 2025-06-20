import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import Path from './routes/index.jsx'
import { UserContext } from './context/practiceContext.jsx'
// import Chat from './pages/chatPage.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Path />    
    {/* <Chat/> */}
  </StrictMode>,
)
