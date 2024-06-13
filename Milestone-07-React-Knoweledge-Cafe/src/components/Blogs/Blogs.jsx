import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropsTypes from 'prop-types'

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch('blogs.json');
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className='w-2/3 drop-shadow-lg'>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropsTypes.func,
  handleMarkAsRead: PropsTypes.func
};

export default Blogs;