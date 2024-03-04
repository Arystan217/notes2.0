import React from "react"
import { Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound/NotFound"
import MainPage from "./pages/MainPage/MainPage"

const App = ({ state, dispatch }) => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App