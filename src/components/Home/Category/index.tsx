import Container from "@/components/Container";
import CategoryCard from "./CategoryCard";

const categories = [
   {
      name: "Slip Sheets",
      description: "Optimizá espacios, reducí costos y potenciá tus cargas.",
      image: "/home/category1.png",
      url: "/productos#slip-sheets",
   },
   {
      name: "Materiales de embalaje",
      description:
         "Asegurá la integridad de tus productos durante el almacenamiento y envío.",
      image: "/home/category2.png",
      url: "/productos#materiales-de-embalaje",
   },
   {
      name: "Soluciones de polietileno",
      description:
         "Asegurá la integridad de las mercancías con productos hechos a medida.",
      image: "/home/category3.png",
      url: "/productos#soluciones-de-polietileno",
   },
   {
      name: "Soluciones de cadena de frío",
      description:
         "Asegurá la calidad y seguridad de los productos sensibles a la temperatura.",
      image: "/home/category4.png",
      url: "/productos#soluciones-de-cadena-de-frio",
   },
];

const CategoryList = () => {
   return (
      <section className="py-10">
         <Container>
            <div>
               <h3 className="text-primary font-bold text-3xl border-l-[4px] border-primary pl-4">
                  Categorías
               </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
               {categories.map((category, index) => (
                  <CategoryCard
                     key={index}
                     name={category.name}
                     description={category.description}
                     image={category.image}
                     url={category.url}
                  />
               ))}
            </div>
         </Container>
      </section>
   );
};

export default CategoryList;
