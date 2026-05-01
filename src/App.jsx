import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Pages from "./Components/Pages";
import About from "./Components/About";
import DesignSkills from "./Components/Skill";
import ExperienceEducation from "./Components/Education";
import ContactForm from "./Components/ContactForm";
import ProjectCards from "./Components/Project/ProjectCard";
import ProjectDetail from "./Components/Project/ProjectDetails";
import HireMe from "./Components/HireMe";

import AdminLayout from "./Admin/AdminLayout";
import AdminHome from "./Admin/AdminHome";
import Projects from "./Admin/Projects";
import Contacts from "./Admin/Contacts";
import ProtectedRoute from "./Admin/ProtectedRoute";
import AdminLogin from "./Admin/AdminLogin";

import ScrollToTop from "./Components/ScrollTop";
import Category from "./Admin/Category";

// 👇 Layout wrapper
const Layout = ({ children }) => {
  const location = useLocation();

  const hideNavbarFooter =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/login";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <ScrollToTop />

      {children}

      {!hideNavbarFooter && <Footer />}
    </>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />

      <Route path="/about" element={<About />} />
      <Route path="/skill" element={<DesignSkills />} />
      <Route path="/educat" element={<ExperienceEducation />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/project" element={<ProjectCards />} />
      <Route path="/hireme" element={<HireMe />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />

      {/* ADMIN LOGIN */}
      <Route path="/login" element={<AdminLogin />} />

      {/* ADMIN ROUTES */}
     <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  }
>
  {/* Dashboard Home */}
  <Route index element={<AdminHome />} />

  {/* Projects Management */}
  <Route path="projects" element={<Projects />} />

  {/* Category Management */}
  <Route path="category" element={<Category />} />

  {/* Contacts / Leads */}
  <Route path="contacts" element={<Contacts />} />
</Route>
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;