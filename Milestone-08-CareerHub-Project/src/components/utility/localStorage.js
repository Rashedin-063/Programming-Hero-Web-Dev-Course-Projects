const getJobApplication = () => {
  const storedCart = localStorage.getItem('applied-jobs');
  return storedCart ? JSON.parse(storedCart) : [];
}

const saveJobApplication = id => {
  const storedCart = getJobApplication();
  const isExist = storedCart.find(jobId => jobId === id);
  if (!isExist) {
    storedCart.push(id);
    localStorage.setItem('applied-jobs', JSON.stringify(storedCart))
  }
}

export {getJobApplication, saveJobApplication}