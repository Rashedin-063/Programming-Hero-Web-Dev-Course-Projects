import banner from '../assets/images/banner.jpg'

function Banner() {
  return (
    <div className='my-4 mx-2'>
      <div
        className='hero rounded-xl mx-auto h-[550px] '
        style={{
          backgroundImage: `url(${banner})`,
          borderRadius: '1rem',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
      >
        <div className='hero-overlay bg-opacity-65'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='md:max-w-3xl'>
            <h1 className='mb-5 text-4xl md:text-5xl font-bold text-white leading-[45px] lg:leading-[63px]'>
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className='mb-8 text-white opacity-90 font-light'>
              Join our cooking class to master culinary skills with expert
              chefs. Tailored for enthusiasts of all levels, discover the joy of
              cooking exceptional meals.
            </p>
            <button className='btn btn-success rounded-full hover:bg-transparent hover:border-white hover:text-white'>
              Explore Now
            </button>
            <button className='btn bg-transparent ml-4 rounded-full border-white text-white hover:bg-success hover:border-none hover:text-black'>
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
