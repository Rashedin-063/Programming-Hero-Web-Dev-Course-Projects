import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();

    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    
    const handleApply = () => {
        saveJobApplication(idInt);
        toast('you have applied successfully')
        navigate('/applied')
 }   
 
    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 px-2 py-8">
                    <h2 className="text-4xl">Details coming here</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border px-4 py-8">
                    <h2 className="text-2xl mb-8">Side things</h2>
                    <button onClick={handleApply} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
           <ToastContainer/>
        </div>
    );
};

export default JobDetails;