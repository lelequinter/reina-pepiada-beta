import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Products, Gallery, About, Contact } from "../main/pages";
import { Navbar } from "../ui";
import NavRoutesProvider from "../ui/context";

export const AppRouter = () => {
  return (
    <>
      <NavRoutesProvider>
        <Navbar />
        <Routes>
          {/* Rutas de Heroes */}
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* Rutas de Login */}
          {/* <Route path="login" element={<LoginPage />} /> */}
          {/* Rutas Default */}
          <Route path="/" element={<Navigate to={"/home"} />} />
        </Routes>
      </NavRoutesProvider>
    </>
  );
};
