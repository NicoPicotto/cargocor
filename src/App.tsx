import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./views/home";
import Navbar from "./components/Navbar";
import ProductsView from "./views/products";
import Footer from "./components/Footer";
import ContactView from "./views/contact";
import AboutView from "./views/about";
import ProductView from "./views/product";
import ScrolToTop from "./components/ScrollToTop";

function App() {
   return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
         <Router>
            <ScrolToTop />
            <Navbar />
            <Routes>
               <Route path="/" element={<HomeView />} />
               <Route path="/productos" element={<ProductsView />} />
               <Route path="/contacto" element={<ContactView />} />
               <Route path="/nosotros" element={<AboutView />} />
               <Route path="/producto/:id" element={<ProductView />} />
            </Routes>
            <Footer />
         </Router>
      </ThemeProvider>
   );
}

export default App;
