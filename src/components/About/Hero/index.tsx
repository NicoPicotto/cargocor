import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

const Hero = () => {
   return (
      <section>
         <div className="flex flex-col justify-center h-[70dvh] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-primary/20 z-[-1]"></div>
            <img
               src="/home/cta1.png"
               alt="Trabajador de industria trasaladando mercadería"
               className="absolute top-0 object-top left-0 w-full h-full object-cover z-[-2]"
            />
            <Container>
               <div className="flex w-full items-center justify-center">
                  <h1 className="text-white text-5xl text-center max-w-[20ch]">
                     Estamos para crecer <b>a la par de nuestros clientes</b>.
                  </h1>
               </div>
            </Container>
         </div>
      </section>
   );
};

export default Hero;
