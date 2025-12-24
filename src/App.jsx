import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./componenet/Header";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Packages from "./pages/Packages";




function App() {


  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>

           <Route path="/" element={<Home />} />
           <Route path="about" element={<About />}/>
           <Route path="service" element={<Service />} />
           <Route path="portfolio" element={<Portfolio/>}/>
           <Route path="packages" element={<Packages/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
