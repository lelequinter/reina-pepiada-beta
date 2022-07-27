import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../main/pages/Home";
import { Navbar } from "../ui";


export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Rutas de Heroes */}
        <Route path="home" element={<Home />} />
        {/* <Route path="dc" element={<DcPage />} /> */}
        {/* Rutas de Login */}
        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* Rutas Default */}
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </>
  );
};
