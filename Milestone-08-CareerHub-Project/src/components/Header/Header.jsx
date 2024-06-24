import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/jobs'>Jobs</NavLink>
      </li>
      <li>
        <NavLink to='/applied'>Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to='/statistics'>Statistics</NavLink>
      </li>
      <li>
        <NavLink to='/blogs'>Blogs</NavLink>
      </li>
    </>
  );
  return (
    <div className='navbar bg-white text-black'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-white rounded-box w-52'
          >
            {links}
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>daisyUI</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
         {links}
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn'>Button</a>
      </div>
    </div>
  );
};

export default Header;