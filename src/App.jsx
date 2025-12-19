import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";



function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
