import { Button } from "../ui/button";
import Container from "../Container";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Menu } from "lucide-react";
import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
   return (
      <nav className="bg-gray-50 sticky top-0 z-50 shadow-md">
         <Container>
            <div className="flex justify-between items-center w-full h-16">
               {/* Logo - visible en todos los tamaños */}
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

               {/* Links de navegación - visible solo en desktop */}
               <div className="hidden md:flex items-center gap-2">
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

               {/* Botones de contacto - visible solo en desktop */}
               <div className="hidden md:flex items-center gap-2">
                  <Button asChild>
                     <a href="tel:03584388136">
                        <Phone className="mr-2 h-4 w-4" />
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
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Whatsapp
                     </a>
                  </Button>
               </div>

               {/* Botón de menú hamburguesa - visible solo en mobile */}
               <div className="md:hidden">
                  <Drawer>
                     <DrawerTrigger asChild>
                        <Button variant="ghost" size="sm">
                           <Menu className="h-8 w-8" />
                        </Button>
                     </DrawerTrigger>
                     <DrawerContent>
                        <div className="px-4 pb-4 flex flex-col gap-2">
                           <DrawerClose asChild>
                              <Link to="/nosotros">
                                 <Button
                                    variant="ghost"
                                    className="w-full border border-1-primary justify-center"
                                 >
                                    Nosotros
                                 </Button>
                              </Link>
                           </DrawerClose>
                           <DrawerClose asChild>
                              <Link to="/productos">
                                 <Button
                                    variant="ghost"
                                    className="w-full border border-1-primary justify-center"
                                 >
                                    Productos
                                 </Button>
                              </Link>
                           </DrawerClose>
                           <DrawerClose asChild>
                              <Link to="/contacto">
                                 <Button
                                    variant="ghost"
                                    className="w-full border border-1-primary justify-center"
                                 >
                                    Contacto
                                 </Button>
                              </Link>
                           </DrawerClose>
                           
                           <DrawerClose asChild>
                              <Button asChild className="w-full justify-center">
                                 <a href="tel:03584388136">
                                    <Phone className="mr-2 h-4 w-4" />
                                    (0358)4388136
                                 </a>
                              </Button>
                           </DrawerClose>
                           <DrawerClose asChild>
                              <Button
                                 asChild
                                 className="w-full justify-center bg-[#25d366] text-white hover:bg-[#1ec95b]"
                              >
                                 <a
                                    href="https://wa.me/5493584388136?text=Hola%2C%20me%20gustaría%20consultar%20sobre%20sus%20servicios"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    Whatsapp
                                 </a>
                              </Button>
                           </DrawerClose>
                        </div>
                        {/* <DrawerFooter>
                           <DrawerClose asChild>
                              <Button variant="destructive">Cerrar</Button>
                           </DrawerClose>
                        </DrawerFooter> */}
                     </DrawerContent>
                  </Drawer>
               </div>
            </div>
         </Container>
      </nav>
   );
};

export default Navbar;
