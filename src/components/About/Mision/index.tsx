import Container from "@/components/Container";

const Mision = () => {
   return (
      <section className="py-10">
         <Container>
            <div className="grid grid-cols-3">
               <div className="flex flex-col gap-4 items-center justify-center">
                  <img
                     src="/about/mision1.svg"
                     alt="Icono de visión"
                     className="w-[5rem]"
                  />
                  <h3 className="text-2xl font-bold">Visión</h3>
                  <p className="text-lg text-center max-w-[30ch]">
                     Ser la empresa líder en soluciones innovadoras de embalaje
                     y acondicionamiento de cargas.
                  </p>
               </div>
               <div className="flex flex-col gap-4 items-center justify-center">
                  <img
                     src="/about/mision2.svg"
                     alt="Icono de visión"
                     className="w-[5rem]"
                  />
                  <h3 className="text-2xl font-bold">Misión</h3>
                  <p className="text-lg text-center max-w-[30ch]">
                     Brindar satisfacción a nuestros clientes con soluciones
                     innovadoras de embalaje y acondicionamiento de cargas.
                  </p>
               </div>
               <div className="flex flex-col gap-4 items-center justify-center">
                  <img
                     src="/about/mision3.svg"
                     alt="Icono de visión"
                     className="w-[5rem]"
                  />
                  <h3 className="text-2xl font-bold">Objetivos</h3>
                  <p className="text-lg text-center max-w-[30ch]">
                     Proveer insumos de embalaje y acondicionamiento de cargas a
                     empresas, asegurando calidad, competitividad en precios y
                     tiempos de entrega eficientes.
                  </p>
               </div>
            </div>
         </Container>
      </section>
   );
};
export default Mision;
