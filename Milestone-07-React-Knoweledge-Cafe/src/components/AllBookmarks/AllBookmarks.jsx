import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = (({bookmarks, readingTime}) => {
  return (
    <div className='w-1/3 ml-4 space-y-6'>
      <div className='px-8 py-6 bg-[#6047ED2F] border-2 border-[#6047EC] text-[rgb(96,71,236)] font-semibold rounded-md flex justify-center items-center'>
        <h1 className='text-2xl'>Spent Time on Red: {readingTime} </h1>
      </div>
      <div className='bg-gray-300 px-8 text-center py-4 rounded-xl'>
        <h2 className='text-2xl font-semibold'>
          Bookmarked Blogs: {bookmarks.length}{' '}
        </h2>
        {
          bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
        }
      </div>
    </div>
  );
});

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
}

export default Bookmarks;