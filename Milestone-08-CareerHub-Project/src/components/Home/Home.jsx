import Banner from './../Banner/Banner'
import JobCategories from './../JobCategories/JobCategories';
import FeaturedJobs from './../FeaturedJobs/FeaturedJobs'

const Home = () => {
  return (
    <div className='text-gray-700 space-y-28'>
      <Banner></Banner>
      <JobCategories></JobCategories>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;