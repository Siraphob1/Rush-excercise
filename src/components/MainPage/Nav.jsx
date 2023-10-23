

export const Nav = () => {
  return (
    <div className="navbar bg-base-100 ">
    {/* Left */}
    <div className="flex-1 gap-2">
      <div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
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
      <p className="btn btn-sm normal-case text-xl"> DASHBOARD </p>
      <div className="dropdown dropdown-bottom ">
        <label tabIndex={0} className="btn btn-sm m-1 text-xl">
          Catagory
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
