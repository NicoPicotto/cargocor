import CategoryList from "@/components/Home/Category";
import Hero from "@/components/Home/Hero";
import SecondCTA from "@/components/Home/SecondCTA";

const HomeView = () => {
   return (
      <div>
         <Hero />
         {/* <FirstCTA /> */}
         <CategoryList />
         <SecondCTA />
      </div>
   );
};

export default HomeView;
