
import Cars from "./Cars";
import Admin from "../dashboard/Admin";
import getCars from "../actions/getCars";
import getCurrentUser from "../actions/getCurrentUser";

const page = async () => {
  const cars = await getCars({});
  const currentUser = await getCurrentUser()
 
  return (
    <Admin>
      <Cars 
        cars={cars}
        currentUser={currentUser}
      />
    </Admin>
  );
};

export default page;
