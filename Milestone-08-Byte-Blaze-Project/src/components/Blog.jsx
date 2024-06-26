import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import placeholderImage from '../assets/404.jpg';
import { MdDeleteForever } from 'react-icons/md';

const Blog = ({ blog, deletable, handleDelete }) => {
  const { id, cover_image, title, published_at, description } = blog;
  return (
    <div className='border-2 border-primary border-opacity-30 hover:border-secondary transition hover:scale-105 duration-300 ease-in-out rounded-lg shadow-lg relative'>
      <Link
        to={`/blog/${id}`}
        className='max-w-sm mx-auto transition duration-300 ease-in border-2 p-2 hover:scale-105 border-opacity-30 border-primary hover:border-secondary  group hover:no-underline focus:no-underline '
      >
        <img
          role='presentation'
          className='object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500'
          src={cover_image || placeholderImage}
        />
        <div className='p-6 space-y-2'>
          <h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
            {title}
          </h3>
          <span className='text-xs text-gray-400'>
            <strong>Published Date: </strong>
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handleDelete(blog.id)}
          className='bg-primary p-3 ml-5 rounded-full hover:bg-secondary group  cursor-pointer hover:scale-105 absolute -top-5 -right-5'>
          <MdDeleteForever
            size={20}
            className='text-secondary group-hover:text-primary'
          />
        </div>
      )}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  deletable: PropTypes.bool,
  handleDelete: PropTypes.func,
};

export default Blog;
