import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../../assets/logo2.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#0aa5e3] text-lg font-bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#0aa5e3] text-lg font-bold"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#0aa5e3] text-lg font-bold"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  const handelLogOut = () => {
    userLogout()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar container mx-auto my-2 lg:my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content space-y-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img className="w-10 md:w-12 lg:w-16 mr-3" src={logo} alt="" />
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
            <span className="text-sky-400">Tech</span> Shop
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 text-lg font-medium space-x-20">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ?
          <>
            <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="text-xl font-semibold">{user?.displayName}</a>
            </li>
            <li>
              <button onClick={handelLogOut}>Logout</button>
            </li>
          </ul>
        </div>
          </> :
          <>
            <Link to="/signIn" className="text-xl font-medium bg-blue-400 px-5 py-3 rounded-xl text-white">
              Sign In
            </Link>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
