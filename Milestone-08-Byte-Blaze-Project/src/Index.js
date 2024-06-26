import toast from 'react-hot-toast';

const getBlogsFromLS = () => {
  const getStoredBlogs = localStorage.getItem('blogs');
  return getStoredBlogs ? JSON.parse(getStoredBlogs) : [];
};

const saveBlogsToLS = (blog) => {
  const storedBlogs = getBlogsFromLS();
  const isExist = storedBlogs.find((b) => b.id === blog.id);
  if (isExist) {
    toast.error('Already Bookmarked');
    return;
  } 
  storedBlogs.push(blog);
  localStorage.setItem('blogs', JSON.stringify(storedBlogs));
  toast.success('Bookmarked successfully');
};

const deleteBlogsFromLS = (id) => {
  const storedBlogs = getBlogsFromLS();
  const remaining = storedBlogs.filter(blog => blog.id !== id);
  localStorage.setItem('blogs', JSON.stringify(remaining));
  toast.success('blog removed successfully');
};

export { getBlogsFromLS, saveBlogsToLS, deleteBlogsFromLS };

