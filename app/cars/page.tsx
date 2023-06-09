import Cars from "./Cars";
import Admin from "../dashboard/Admin";
import getCars from "../actions/getCars";
import CarCard from "../components/cars/CarCard";

const page = async () => {
  const cars = await getCars();
  return (
    <Admin>
      <Cars />
      <div
        className="pt-24
                          grid
                          grid-cols-1
                          sm:grid-cols-2
                          md:grid-cols-3
                          lg:grid-cols-4
                          xl:grid-cols-5
                          2xl:grid-cols-6
                          gap-8"
      >
        {cars.map((car: any) => {
          return (
            <CarCard
              // currentUser={currentUser}
              key={car.id}
              data={car}
            />
          );
        })}
      </div>
    </Admin>
  );
};

export default page;
