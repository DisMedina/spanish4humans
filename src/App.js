import "./App.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import {
  Navbar,
  Footer,
  HomePage,
  TeacherPage,
  AlumniPage
} from "./components";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
          <Routes>
            <Route  exact path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<TeacherPage />} />
            <Route path="/aboutthem/:id" element={<AlumniPage />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;