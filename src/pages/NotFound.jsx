import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-6xl font-extrabold">404</h1>
      <h1 className="text-5xl font-bold text-red-500">Page Not Found</h1>
      <Link
        to="/"
        className="bg-green-800 text-white py-2 px-10 rounded-full hover:bg-green-600 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 outline-none"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
