import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Page1 from "./components/Page1.jsx";
import Page2 from "./components/Page2.jsx";
import Header from "./components/Header.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Page1" element={<Page1 />} />
        <Route path="Page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
