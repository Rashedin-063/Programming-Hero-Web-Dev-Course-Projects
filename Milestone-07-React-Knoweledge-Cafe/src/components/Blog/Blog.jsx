import PropTypes from 'prop-types';
import { CiBookmarkCheck } from 'react-icons/ci';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className='mb-6'>
      <img className='rounded-xl mb-4 w-full md:p-2' src={cover} alt={title} />
      <div className='flex justify-between items-center'>
        <div className='flex gap-3 mt-2'>
          <img className='w-14' src={author_img} alt='Author image' />
          <div className='space-y-[-2px]'>
            <h3 className='text-xl mt-1'>{author}</h3>
            <p className='opacity-75'>{posted_date}</p>
          </div>
        </div>
        <div className='flex'>
          <p className='opacity-75 text-xl mr-2'>{reading_time} min red</p>
          <button
            className='text-2xl'
            onClick={() => handleAddToBookmark(blog)}
          >
            <CiBookmarkCheck />
          </button>
        </div>
      </div>
      <h3 className='text-3xl font-semibold line my-4 leading-10'>{title}</h3>
      <div className='flex gap-2'>
        {hashtags.map((hash, idx) => (
          <p key={idx}>#{hash}</p>
        ))}
      </div>
      <button
        className='text-[#6047EC] my-2 mb-6 underline'
        onClick={() => handleMarkAsRead(id, reading_time)}
      >
        Mark As Read
      </button>
      <hr />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;

