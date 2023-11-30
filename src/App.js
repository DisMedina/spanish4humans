import "./App.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import {
  Navbar,
  Footer,
  HomePage,
  TeacherPage,
} from "./components";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
          <Routes>
            <Route  exact path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<TeacherPage />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;