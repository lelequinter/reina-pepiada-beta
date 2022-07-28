import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Products, Gallery, About } from "../main/pages";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Rutas de Heroes */}
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        {/* Rutas de Login */}
        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* Rutas Default */}
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </>
  );
};
