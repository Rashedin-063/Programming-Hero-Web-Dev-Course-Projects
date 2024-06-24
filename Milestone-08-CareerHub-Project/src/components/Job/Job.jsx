import { MdLocationOn } from 'react-icons/md';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


const Job = ({ job }) => {
  
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  
  return (
    <div className='card card-compact bg-slate-100 shadow-xl py-8'>
      <figure>
        <img src={logo} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{job_title}</h2>
        <p>{company_name}</p>
        <div className='flex gap-3'>
          <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]'>
            {remote_or_onsite}
          </button>
          <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]'>
            {job_type}
          </button>
        </div>
        <div className='mt-4 flex gap-4'>
          <h2 className='flex'>
            <MdLocationOn className='text-2xl'></MdLocationOn> {location}
          </h2>
          <h2 className='flex'>
            {' '}
            <AiOutlineDollar className='text-2xl -mr-2'></AiOutlineDollar> {salary}
          </h2>
        </div>
        <div className='card-actions mt-4'>
         <Link to={`/job/${id}`} className="btn btn-primary">Show Details</Link>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
