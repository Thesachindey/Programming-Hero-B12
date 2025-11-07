import { Link, NavLink } from "react-router";
import logo from "../assets/firebase-logo.png";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";

const Navbar = () => {
  const handleSignout = () => {};

  return (
    <div className="bg-blue-950 py-2 border-b border-b-slate-300">
      <MyContainer className="flex items-center justify-between">
        {/* Left - Logo */}
        <figure className="flex items-center">
          <img src={logo} className="w-[55px]" alt="Logo" />
        </figure>

        {/* Middle - Nav Links */}
        <ul className="flex items-center gap-10">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/about-us"}>About Us</MyLink>
          </li>
          <li>
            <MyLink to={"/profile"}>Profile</MyLink>
          </li>
        </ul>

        {/* Right - Buttons / Dropdown */}
        <div className="flex items-center gap-5">
          {/* Profile Popover */}
          <div className="relative">
            <button
              className="btn btn-sm border border-slate-300 text-slate-600 "
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" }}
            >
              👤
            </button>

            <div
              className="dropdown menu w-52 rounded-box bg-white border border-slate-200 shadow-md absolute right-0 mt-2"
              popover="auto"
              id="popover-1"
              style={{ positionAnchor: "--anchor-1" }}
            >
              <div className="p-3 space-y-2 text-center">
                <h2 className="text-lg font-semibold text-slate-700">
                  User Name
                </h2>
                <p className="text-sm text-slate-500">user@email.com</p>
                <button
                  onClick={handleSignout}
                  className="w-full bg-red-500 text-white py-1.5 rounded-md hover:bg-red-600"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Sign-in Button */}
          <Link
            to={"/signup"}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-semibold"
          >
            Sign in
          </Link>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
