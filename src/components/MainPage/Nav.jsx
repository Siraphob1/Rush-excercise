/* eslint-disable react/prop-types */
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom'

export const Nav = ({setSelectBiking , setSelectHiking , setSelectRunning ,setSelectSwimming, setSelectWalking ,selectBiking ,selectHiking , selectRunning , selectSwimming , selectWalking}) => {
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
              <div>All</div>
            </li>
            <li>
              <div>
                <input type="checkbox" id="selectBiking"  className="checkbox" value={selectBiking} onChange={()=>{setSelectBiking(prev => !prev)}} />
                <label htmlFor="selectBiking">Biking</label>
              </div>
            </li>
            <li>
              <div>
                <input type="checkbox" id="selectHiking"  className="checkbox" value={selectHiking} onChange={()=>{setSelectHiking(prev => !prev)}} />
                <label htmlFor="selectHiking">Hiking</label>
              </div>
            </li>
            <li>
              <div>
                <input type="checkbox" id="selectRunning"  className="checkbox" value={selectRunning} onChange={()=>{setSelectRunning(prev => !prev)}} />
                <label htmlFor="selectRunning">Running</label>
              </div>
            </li>
            <li>
              <div>
                <input type="checkbox" id="selectSwimming"  className="checkbox" value={selectSwimming} onChange={()=>{setSelectSwimming(prev => !prev)}} />
                <label htmlFor="selectSwimming">Swimming</label>
              </div>
            </li>            
            <li>
              <div>
                <input type="checkbox" id="selectWalking"  className="checkbox" value={selectWalking} onChange={()=>{setSelectWalking(prev => !prev)}} />
                <label htmlFor="selectWalking">Walking</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
