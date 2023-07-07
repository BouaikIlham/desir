import getCurrentUser from "../actions/getCurrentUser";
import User from "./User";
import Admin from "./Admin";
import getAllUsers from "../actions/getAllUsers";
const page = async () => {
  const currentUser = await getCurrentUser();
  const users = await getAllUsers();
  if (currentUser?.role !== "ADMIN") {
    return <User />;
  }
  return (
    <Admin>
      Welcome back!! {currentUser.name}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                   User email
                </th>
                <th scope="col" className="px-6 py-3">
                  User name
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  cars
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                 <tr key={user.id}
                     className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                 <th
                   scope="row"
                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                 >
                   {user.email}
                 </th>
                 <td className="px-6 py-4">{user.name}</td>
                 <td className="px-6 py-4">{user.role}</td>
                  {/* how many reservation for every user */}
                 {/* <td className="px-6 py-4">$2999</td> */}
                 <td className="px-6 py-4">
                   <a
                     href="#"
                     className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                   >
                     Edit
                   </a>
                 </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
    </Admin>
  );
};

export default page;
