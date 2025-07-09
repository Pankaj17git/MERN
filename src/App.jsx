import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Quiz from "./pages/quiz"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
