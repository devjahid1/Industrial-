import { Link } from "react-router-dom";
import logo from "../../assets/image 1.png"


const Nav = () => {
    const Links = <>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/jobs'>Job Opening</Link>
        <Link to='/work'>Our Work</Link>
        <Link to='/career'>Careers</Link>
    </>
    return (
        <div>
            {/* NavBar */}
<div className="navbar bg-[#0057B8] fixed z-20 shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {Links}
      </ul>
    </div>
    <img className="w-[150px]" src={logo} alt="Website logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-white gap-5">
    {Links}
    </ul>
  </div>
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
  </div>
</div>

</div>
    );
};

export default Nav;