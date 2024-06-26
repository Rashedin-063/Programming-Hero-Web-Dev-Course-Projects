import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='hero min-h-[calc(100vh-300px)]'>
      <div className='hero-content text-center mt-40'>
        <div className='max-w-lg'>
          <h1 className='text-5xl font-bold'>
            Welcome to{' '}
            <span className='text-5xl font-bold bg-gradient-to-r from-secondary via-violet-500 to-primary text-transparent bg-clip-text animate-gradient bg-300%'>
              ByteBlaze
            </span>
          </h1>
          <p className='py-6'>
            ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>
          <div className='flex gap-2 w-1/2 mx-auto'>
            <Link to='/blogs'>
              <a
                href='#_'
                className='relative inline-block px-4 py-2 font-medium group'
              >
                <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                <span className='absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary'></span>
                <span className='relative text-black group-hover:text-white'>
                  Read Blogs
                </span>
              </a>
            </Link>
            <Link to='/bookmarks'>
              <a
                href='#_'
                className='relative inline-block px-4 py-2 font-medium group'
              >
                <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                <span className='absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary'></span>
                <span className='relative text-black group-hover:text-white'>
                  Bookmarks
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;