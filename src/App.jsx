import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";


const App = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <p className="font-medium text-center">--- Sip & Savor ---</p>
      <h1 className="text-3xl font-bold text-center">Our Popular Products</h1>
      <div className="grid md:grid-cols-2 gap-8 mt-8 container mx-auto p-8">
        {
          coffees.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee = {coffee}
          coffees = {coffees}
          setCoffees = {setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default App;