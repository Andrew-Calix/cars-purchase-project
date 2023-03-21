import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    let cost = 0;
    for (let car of filteredCars) {
      cost += car.cost;
    }
    return cost;
  });
}
export default CarValue;
