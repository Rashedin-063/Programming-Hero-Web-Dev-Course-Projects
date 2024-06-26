import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import Root from "../Layout/Root";
import BlogDetails from "../page/BlogDetails";
import Blogs from "../page/Blogs";
import Bookmarks from "../page/Bookmarks";
import Home from "../page/Home";
import Content from "../components/Content";
import Author from "../components/Author";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: async () =>
          await fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path: 'blog/:blogId',
        element: <BlogDetails></BlogDetails>,
        loader: async ({ params }) =>
          await fetch(`https://dev.to/api/articles/${params.blogId}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: async ({ params }) =>
              await fetch(`https://dev.to/api/articles/${params.blogId}`),
          },
          {
            path: 'author',
            element: <Author></Author>,
            loader: async ({ params }) =>
              await fetch(`https://dev.to/api/articles/${params.blogId}`)
          },
        ],
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);


export default router;