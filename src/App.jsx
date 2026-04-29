import { BrowserRouter, Routes, Route } from "react-router-dom";

// Portfolio sections
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Dashboard
import Home from "./components/Home";

// Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Count from "./pages/Count";
import Stopwatch from "./pages/Stopwatch";
import Calculator from "./pages/Calculator";
import Todo from "./pages/Todo";
import Weather from "./pages/Weather";
import MapPage from "./pages/MapPage";
import Student from "./pages/Student";
import JobPortal from "./pages/JobPortal";
import PasswordGenerator from "./pages/PasswordGenerator"; // ✅ NEW

// Animation wrapper
import PageWrapper from "./components/PageWrapper";

function PortfolioContent() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </PageWrapper>
  );
}

export default function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      <Routes>

        {/* Portfolio */}
        <Route path="/" element={<PortfolioContent />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        {/* Projects */}
        <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/count" element={<PageWrapper><Count /></PageWrapper>} />
        <Route path="/stopwatch" element={<PageWrapper><Stopwatch /></PageWrapper>} />
        <Route path="/calculator" element={<PageWrapper><Calculator /></PageWrapper>} />
        <Route path="/todo" element={<PageWrapper><Todo /></PageWrapper>} />

        {/* Job Portal */}
        <Route path="/jobs" element={<PageWrapper><JobPortal /></PageWrapper>} />

        {/* 🔐 Password Generator (NEW) */}
        <Route path="/password" element={<PageWrapper><PasswordGenerator /></PageWrapper>} />

        {/* Other */}
        <Route path="/weather" element={<PageWrapper><Weather /></PageWrapper>} />
        <Route path="/map" element={<PageWrapper><MapPage /></PageWrapper>} />
        <Route path="/student" element={<PageWrapper><Student /></PageWrapper>} />

      </Routes>
    </BrowserRouter>
  );
}