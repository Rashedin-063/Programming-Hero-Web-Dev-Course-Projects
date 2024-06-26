import { useEffect, useState } from "react";
import { deleteBlogsFromLS, getBlogsFromLS } from "../Index";
import Blog from "../components/Blog";
import EmptyBookmark from "../components/EmptyBookmark";


const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogsFromLS();
    setBlogs(storedBlogs)
  }, [])

  const handleDelete = id => {
    deleteBlogsFromLS(id);
    const savedBlogs = getBlogsFromLS();
    setBlogs(savedBlogs)
  }
  
  
  if (blogs.length < 1) {
  return <EmptyBookmark
    message='No Bookmark Available'
    address='/blogs'
    label='Add Bookmarks'
  ></EmptyBookmark>;
} 
  
  return (
    <section className=' px-4 sm:px-8 lg:px-12 py-8'>
      <div className='container max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12'>
        <div className='grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {
            blogs.map(blog => <Blog
              handleDelete={handleDelete}
              deletable={true}
              key={blog.id}
              blog={blog}></Blog>
            )
            
         }
        </div>
      </div>
    </section>
  );
};

export default Bookmarks;