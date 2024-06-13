import PropTypes from 'prop-types'

const Bookmark = ({ bookmark }) => {
  return (
    <div className='bg-white p-4 my-4 rounded-md drop-shadow-md'>
      <h5 className="text-lg font-semibold mt-2">{bookmark.title}</h5>
   </div>
  );
};

Bookmark.propTypes = {
  bookmark : PropTypes.object,
}

export default Bookmark;