import { useLoaderData } from "react-router"
import CoffeeCard from "./Components/CoffeeCard";


function App() {

  const loaderCoffee = useLoaderData();

  return (
    <div className="max-w-11/12 mx-auto">
      <h1 className='text-4xl font-bold text-center py-4'>Hot Cold coffees: {loaderCoffee.length}</h1>
      <div className="grid md:grid-cols-2 gap-5 ">
        {
        loaderCoffee.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
      </div>
    </div>
  )
}

export default App
