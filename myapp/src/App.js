import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NotFound from "./components/Notfound"

const App = () => (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home  />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/*" element={<NotFound />}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Routes>
  </BrowserRouter>
)

export default App