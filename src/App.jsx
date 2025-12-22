import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./pages/Nav";



function App() {


  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>

          <Route path="/" element={<Home/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
