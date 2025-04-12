import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./views/home";
import Navbar from "./components/Navbar";

function App() {
   return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
         <Router>
            <Navbar />
            <Routes>
               <Route path="/" element={<HomeView />} />
            </Routes>
         </Router>
      </ThemeProvider>
   );
}

export default App;
