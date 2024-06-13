import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/AllBookmarks/AllBookmarks'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {
// state
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  // on click
  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    //remove from bookmark
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark)
  }

// jsx
  return (
    <>
      <Header></Header>
      <main className='container mx-auto  my-8 pb-4 flex justify-between border-b-2 px-4 md:px-12 lg:px-24'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead=
          {handleMarkAsRead}
     ></Blogs>
        <Bookmarks
          bookmarks=
          {bookmarks}
          readingTime={readingTime}
    ></Bookmarks>
      </main>
    </>
  );
}

export default App
