import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className="navbar bg-base-100 ">
      {/* Left */}
      <div className="flex-1 gap-2">
        <div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <div className="text-4xl flex justify-center">
                <CgProfile />
              </div>
            </div>
          </label>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex-none mr-4">
      <Link to={'/dashboard'} className="self-center btn btn-sm normal-case text-xl">DASHBOARD</Link>
        <div className="dropdown dropdown-bottom ">
          <label tabIndex={0} className="btn btn-sm m-1 text-xl">
            Catagory
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Running</a>
            </li>
            <li>
              <a>Biking</a>
            </li>
            <li>
              <a>Swimming</a>
            </li>
            <li>
              <a>Hiking</a>
            </li>
            <li>
              <a>Walking</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
