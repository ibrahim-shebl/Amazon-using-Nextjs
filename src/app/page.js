import Banner from "@/components/Banner";
import Products from "@/components/Products";

 

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products />
        </div>
      </div>
    </main>
  );
}

 
 