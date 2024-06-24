import { Link, useRouteError, } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)
  
  return (
    <div>
      <h2>Oops!!!</h2>
      <p>{error.statusText || error.message}</p>
      {
        error.status === 404 && <div>
          <h2>404!! Page Not Found</h2>
          <p>Go back to the home page</p>
        </div>
      }
      <Link to='/'>
        <button className="btn btn-success">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;