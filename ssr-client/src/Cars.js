import { useEffect, useState } from "react";

const fetchCars = async () => {
  const response = await fetch(
    "http://universities.hipolabs.com/search?country="
  );
  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }
  return response.json();
};

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Cars Component</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.country}>{car.country}</li>
        ))}
      </ul>
    </div>
  );
};
export default Cars;
