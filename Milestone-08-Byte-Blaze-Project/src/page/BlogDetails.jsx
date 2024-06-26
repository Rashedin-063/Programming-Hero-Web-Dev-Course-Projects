import { Link, Outlet, useLoaderData } from "react-router-dom";
import { FaBookReader, FaCommentDots } from 'react-icons/fa';
import { CiRead } from 'react-icons/ci';
import { useState } from "react";
import { MdBookmarkAdd } from 'react-icons/md';
import {saveBlogsToLS } from "../Index";


const BlogDetails = () => {
  const blog = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);

  const handleBookmark = blog => {
    saveBlogsToLS(blog)
    
  }
  
  const {
    comments_count,
    title, published_at,
    reading_time_minutes,
    public_reactions_count, user 
  } = blog;
  
  return (
    <div className='max-w-2xl px-6 py-16 mx-auto space-y-12'>
      <article className='space-y-4'>
        <div className='space-y-6'>
          <h1 className='text-4xl font-bold md:tracking-tight md:text-5xl'>
            {title}
          </h1>
          {/* author, profile image, read, comment, view count */}
          <div className='flex flex-col items-start justify-between w-full md:flex-row md:items-center'>
            <div className='flex items-center space-x-2 '>
              <img
                src={user.profile_image}
                alt=''
                className='w-4 h-4 border rounded-full'
              />
              <p>{user.name ? user.name : 'author'} </p>
            </div>
            <p className='mt-2 ml-5'>
              <strong>Published Date:</strong>{' '}
              {new Date(published_at).toLocaleDateString()}
            </p>
            <div className='flex gap-3 mt-3 md:mt-0 ml-5'>
              <span className='flex justify-center items-center gap-1'>
                {' '}
                <FaBookReader />
                {reading_time_minutes} min read
              </span>
              <span className='flex justify-center items-center gap-1'>
                {' '}
                <CiRead />
                {public_reactions_count} views
              </span>
              <span className='flex justify-center items-center gap-1'>
                <FaCommentDots /> {comments_count} comments
              </span>
            </div>
            <div></div>
          </div>
        </div>
        {/* tab index */}
        <div className='flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap '>
          <Link
            to={``}
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${
              tabIndex === 0 ? 'border-2 border-b-0' : 'border-b-2'
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4'
            >
              <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
            </svg>
            <span>Content</span>
          </Link>
          <Link
            to={`author`}
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${
              tabIndex === 1 ? 'border-2 border-b-0' : 'border-b-2'
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4'
            >
              <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
              <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
            </svg>
            <span>Author</span>
          </Link>
          <div
            onClick={() => handleBookmark(blog)}
            className='bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden'
          >
            <MdBookmarkAdd size={20} className="text-secondary" />
          </div>
        </div>
        <Outlet></Outlet>
      </article>
    </div>
  );
};

export default BlogDetails;