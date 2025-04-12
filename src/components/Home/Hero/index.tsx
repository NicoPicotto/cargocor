import Container from "@/components/Container";
const Hero = () => {
   return (
      <section>
         <div className="max-h-[70dvh] overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/50"></div>
            <img
               src="/home/hero.jpeg"
               alt="Trabajador de industria trasaladando mercadería"
            />
         </div>

         <div className="grid grid-cols-3 gap-0 h-[30%] overflow-hidden text-white">
            <div className="bg-[hsl(var(--secundario))] h-full col-span-1 w-full flex items-center justify-center gap-2 p-8">
               <img src="/home/hero-1.svg" className="h-16" />
               <span className="max-w-[12ch] text-left text-lg">
                  Enfoque en nuestros clientes
               </span>
            </div>
            <div className="bg-[hsl(var(--terciario))] h-full col-span-1 w-full flex items-center justify-center gap-2 p-8">
               <img src="/home/hero-2.svg" className="h-16" />
               <span className="max-w-[14ch] text-left text-lg">
                  Productos de calidad y a medida
               </span>
            </div>
            <div className="bg-[hsl(var(--complementario))] h-full col-span-1 w-full flex items-center justify-center gap-2 p-8">
               <img src="/home/hero-3.svg" className="h-16" />
               <span className="max-w-[12ch] text-left text-lg">
                  Servicio de postventa
               </span>
            </div>
         </div>
      </section>
   );
};

export default Hero;
