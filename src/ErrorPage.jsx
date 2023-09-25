import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-screen min-h-screen">
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        <h2>Oops!!! </h2>
        <Link to="/">Go back to home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
