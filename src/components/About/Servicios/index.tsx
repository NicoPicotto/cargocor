import Container from "@/components/Container";

const Servicios = () => {
   return (
      <section className="pt-10">
         <Container>
            <div className="flex gap-6 items-center">
               <div className="border border-gray-300 w-full"></div>
               <img src="/common/logogrande.svg" className="w-12 h-12" />
               <div className="border border-gray-300 w-full"></div>
            </div>
            <div className="flex flex-col items-center gap-4">
               <div className="flex flex-col items-center flex-1 gap-4 p-6 justify-center">
                  <h3 className="text-2xl font-bold text-center">
                     Asesoramiento
                  </h3>
                  <p className="text-lg max-w-[60%] text-center">
                     Nos enfocamos en ofrecer respuestas rápidas y soluciones
                     efectivas para que puedas adaptarte ágilmente a las
                     demandas del mercado. Por eso, nuestro asesoramiento
                     continuo es clave para apoyarte en todo momento.
                  </p>
               </div>
               <div className="border border-gray-300 w-[50%]"></div>
               <div className="flex flex-col items-center flex-1 gap-4 p-6 justify-center">
                  <h3 className="text-2xl font-bold text-center">Calidad</h3>
                  <p className="text-lg max-w-[60%] text-center">
                     Nos aseguramos de que tus productos se fabriquen, almacenen
                     y transporten de forma segura, sin riesgo de daños. Por
                     eso, seleccionamos cada uno de nuestros productos con los
                     más altos estándares de calidad.
                  </p>
               </div>
               <div className="border border-gray-300 w-[50%]"></div>
               <div className="flex flex-col items-center flex-1 gap-4 p-6 justify-center">
                  <h3 className="text-2xl font-bold text-center">
                     Enfoque en nuestros clientes
                  </h3>
                  <p className="text-lg max-w-[60%] text-center">
                     Nuestros clientes son el corazón de nuestro negocio. Por
                     eso, nos adaptamos a sus necesidades técnicas y
                     comerciales, manteniendo una comunicación constante.
                     Conocer las demandas del mercado nos permite ofrecer
                     siempre las mejores soluciones.
                  </p>
               </div>
            </div>
         </Container>
      </section>
   );
};
export default Servicios;
