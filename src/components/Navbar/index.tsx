import { Button } from "../ui/button";
import Container from "../Container";
import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
const Navbar = () => {
   return (
      <nav className="bg-background sticky top-0 z-50 shadow-md">
         <Container>
            <div className="flex justify-between items-center w-full h-16 ">
               <div>
                  <Link to={"/"} className="flex items-center">
                     <img
                        src="/common/logogrande.svg"
                        alt="logo"
                        className="w-10 h-10"
                     />
                     <span className="text-2xl font-bold ml-2 text-primary">
                        CARGOCOR
                     </span>
                  </Link>
               </div>
               <div className="flex items-center gap-2">
                  <Link to="/nosotros">
                     <Button variant="link">Nosotros</Button>
                  </Link>
                  <Link to="/productos">
                     <Button variant="link">Productos</Button>
                  </Link>
                  <Link to="/contacto">
                     <Button variant="link">Contacto</Button>
                  </Link>
               </div>
               <div className="flex items-center gap-2">
                  <Button asChild>
                     <a href="tel:03584388136">
                        <Phone />
                        (0358)4388136
                     </a>
                  </Button>
                  <Button
                     asChild
                     className="bg-[#25d366] text-white hover:bg-[#1ec95b]"
                  >
                     <a
                        href="https://wa.me/5493584388136?text=Hola%2C%20me%20gustaría%20consultar%20sobre%20sus%20servicios"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <MessageCircle />
                        Whatsapp
                     </a>
                  </Button>
               </div>
            </div>
         </Container>
      </nav>
   );
};
export default Navbar;
