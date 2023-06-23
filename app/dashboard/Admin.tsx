"use client";
import Nav from "../components/dashboard/Nav";

interface AdminProps {
  children: React.ReactNode;
}
const Admin: React.FC<AdminProps> = ({ children }) => {
  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
};

export default Admin;
