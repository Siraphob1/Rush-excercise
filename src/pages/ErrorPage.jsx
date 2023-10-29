import { useRouteError } from "react-router-dom";

import { Link } from 'react-router-dom'
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-[1.2rem] gap-y-[0.5rem] bg-black bg-opacity-90">
      <h1 className="text-white text-[3rem] font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'} className="btn btn-active btn-neutral normal-case hover:bg-gray-500 focus:outline-none w-[150px] h-[40px] mt-[1rem]">Back to main </Link>
                
    </div>
  );
}
