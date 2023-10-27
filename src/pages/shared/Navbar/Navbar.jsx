import { NavLink, useNavigate } from 'react-router-dom';
import logo from './../../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to={'/order'}>My Order</NavLink>
          </li>
          <li>
            <button onClick={handleSignOut}>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink to={'/login'}>Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 p-0 my-12">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-error">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
