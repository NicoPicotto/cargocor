import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { Link } from "react-router-dom";

const Hero = () => {
   return (
      <section>
         <div className="flex flex-col justify-center h-[70dvh] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/20 z-[-1]"></div>
            <img
               src="/home/hero.webp"
               alt="Trabajador de industria trasaladando mercadería"
               className="absolute top-0 object-top left-0 w-full h-full object-cover z-[-2]"
            />
            <Container>
               <div className="flex flex-col gap-6">
                  <h1 className="text-white text-3xl md:text-4xl lg:text-5xl max-w-[24ch]">
                     Ofrecemos productos de alta calidad y un servicio
                     personalizado, brindando soluciones innovadoras{" "}
                     <b>adaptadas a cada cliente</b>.
                  </h1>
                  <div className="flex gap-4 items-center">
                     <Link to="/nosotros">
                        <Button variant="secondary" size="lg">
                           Conocenos
                        </Button>
                     </Link>
                     <Link to="/contacto">
                        <Button variant="outline" size="lg">
                           Contactanos
                        </Button>
                     </Link>
                  </div>
               </div>
            </Container>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 h-[30%] overflow-hidden text-white">
            <div className="bg-[hsl(var(--secundario))] h-full col-span-1 w-full flex items-center justify-center gap-2 p-8">
               <img
                  src="/home/hero-1.svg"
                  className="h-16"
                  alt="icono de persona con caja"
               />
               <span className="max-w-[12ch] text-left text-lg">
                  Enfoque en nuestros clientes
               </span>
            </div>
            <div className="bg-[hsl(var(--terciario))] h-full col-span-1 w-full flex items-center justify-center gap-2 p-8">
               <img
                  src="/home/hero-2.svg"
                  className="h-16"
                  alt="icono de mano con signo de aprobación"
               />
               <span className="max-w-[14ch] text-left text-lg">
                  Productos de calidad y a medida
               </span>
            </div>
            <div className="bg-[hsl(var(--complementario))] h-full col-span-1 w-full flex items-center justify-center gap-2 p-8">
               <img
                  src="/home/hero-3.svg"
                  className="h-16"
                  alt="icono de persona con auriculares"
               />
               <span className="max-w-[12ch] text-left text-lg">
                  Servicio de postventa
               </span>
            </div>
         </div>
      </section>
   );
};

export default Hero;
