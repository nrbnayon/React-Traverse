import { useEffect, useState } from "react";
import PriceOption from "./PriceOption";

const Prices = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/gym.json");
        const getData = await res.json();
        setData(getData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Gym Best Prices</h1>
      <div className="grid grid-cols-3 gap-4 p-4 ">
        {data.map((plan) => (
          <PriceOption key={plan.id} data={plan} />
        ))}
      </div>
    </div>
  );
};

export default Prices;
