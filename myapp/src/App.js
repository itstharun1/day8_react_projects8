import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NotFound from "./components/Notfound"

const App = () => (
  <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Routes>
 </BrowserRouter>
)

export default App