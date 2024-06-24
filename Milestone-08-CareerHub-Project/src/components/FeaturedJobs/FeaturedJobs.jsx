import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch('jobs.json');
      const data = await res.json();
      setJobs(data); 
    }
    fetchDetails();
  }, [])
  
  return (
    <div className='text-center  space-y-7'>
      <h1 className='text-5xl '>Featured Jobs</h1>
      <p className='max-w-md mx-auto'>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className='grid grid-cols-2 gap-6'>
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length ? 'hidden' : ''}>
        <button onClick={() => setDataLength(jobs.length)} className="btn btn-secondary text-lg">Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;