import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-300 to-red-300 p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Page Not Found!
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-xl mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        possimus blanditiis non deleniti excepturi maiores dicta adipisci, quam
        quis! Omnis quisquam eligendi quo est illum dolorum non quam nulla amet.
      </p>
      <p className="text-center">
        <Link
          to="/home"
          className="text-blue-500 hover:underline text-lg md:text-xl"
        >
          Go to the Home Page
        </Link>
      </p>
    </div>
  );
};

export default Notfound;
