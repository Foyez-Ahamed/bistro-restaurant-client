import { Link } from "react-router-dom";
import errorPic from "../../assets/errorPic/404.gif";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img src={errorPic} className="h-[450px] object-cover" alt="errorPic" />

        <div className="flex justify-center items-center">
        <Link to="/">
          <button className="px-5 py-2 bg-gray-200 border-b-4 rounded-md text-[#BB8506] border-[#BB8506] hover:bg-zinc-900 uppercase">
            Go home
          </button>
        </Link>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;
