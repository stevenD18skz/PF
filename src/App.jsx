import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//IMPORTACION DE COMPONENTES
import Layout from "./components/Layout";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//<Route path="products" element={<ProductsPage />} />
