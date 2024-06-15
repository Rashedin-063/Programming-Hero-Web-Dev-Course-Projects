import user from '../assets/images/user.png'
import { CiSearch } from 'react-icons/ci';

const Nav = () => {
  return (
    <div>
      <div className='navbar py-4'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn lg:hidden bg-gray-800 px-2 py-0'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
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
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className='text-2xl md:text-3xl font-bold ml-2 lg:ml-0 text-black'>
            Recipe Calories
          </a>
        </div>
        <div className='navbar-center hidden lg:flex mr-20'>
          <ul className='menu menu-horizontal px-1 text-black'>
            <li>
              <a className='text-lg text-black font-medium'>Home</a>
            </li>
            <li>
              <a className='text-lg text-black font-medium'>Recipes</a>
            </li>
            <li>
              <a className='text-lg text-black font-medium'>About</a>
            </li>
            <li>
              <a className='text-lg text-black font-medium'>Search</a>
            </li>
          </ul>
        </div>
        <div className='flex-none gap-2 navbar-end md:w-1/3'>
          <div className='form-control relative'>
            <CiSearch className='absolute top-[14px] lg:top-[15px] left-1 lg:left-6 text-xl text-white' />
            <input
              type='text'
              placeholder='  Search'
              className='input input-bordered w-24 md:w-auto rounded-full bg-gray-800'
            />
          </div>
          <img
            className='w-[50px]'
            alt='Tailwind CSS Navbar component'
            src={user}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
