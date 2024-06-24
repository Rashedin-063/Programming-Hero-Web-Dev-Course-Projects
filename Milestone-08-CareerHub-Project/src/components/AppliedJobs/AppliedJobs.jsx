import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getJobApplication } from '../utility/localStorage';

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === 'All') {
      setDisplayJobs(appliedJobs);
    } else if (filter === 'Remote') {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === 'Remote'
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === 'Onsite') {
      const onSiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === 'Onsite'
      );
      setDisplayJobs(onSiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      // const jobsApplied = [];
      // for (let id of storedJobIds) {
      //   const job = jobs.find(job => job.id === id);
      //   if (job) {
      //     jobsApplied.push(job)
      //   }
      // }

      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div>
      <h2 className='text-2xl text-center text-black font-semibold'>
        Jobs I applied : {appliedJobs.length}{' '}
      </h2>

      <div className='text-center mt-4 relative'>
        <details className='dropdown'>
          <summary className='m-1 btn text-white font-semibold tracking-widest'>
            filter
          </summary>
          <ul className='shadow menu dropdown-content z-[1]  rounded-box bg-slate-800 text-white absolute left-16 w-[120px]'>
            <li>
              <a onClick={() => handleJobsFilter('All')}>All</a>
            </li>
            <li>
              <a onClick={() => handleJobsFilter('Onsite')}>Onsite</a>
            </li>
            <li>
              <a onClick={() => handleJobsFilter('Remote')}>Remote</a>
            </li>
          </ul>
        </details>
      </div>

      <div className='text-black text-center mt-8 space-y-4 border-2 p-8 rounded-lg shadow-xl bg-slate-200'>
        {displayJobs.map((job, idx) => (
          <div className='bg-slate-300 p-4 rounded-xl shadow-lg' key={job.id}>
            <span>0{idx + 1}</span>
            <p className='text-lg'>
              Position: <strong>{job.job_title}</strong>{' '}
            </p>
            <p className='text-lg'>
              Company Name: <strong>{job.company_name}</strong>
            </p>
            <p className='text-lg'>
              Job Type: <strong>{job.remote_or_onsite}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
