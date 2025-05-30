import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 h-180 place-content-center bg-white">
      <h1 className="col-start-2 col-end-3 border border-black rounded-md p-8 flex justify-center align-content-center bg-pink-900 text-white">
        Welcome and enjoy my stories
      </h1>
      <p className="col-start-2 col-end-3 justify-center align-content-center py-3 text-black">
        Let's start planning your day
      </p>

      <div className="col-start-2 col-end-3 flex justify-center ">
        
        <Link to="/blog" className="px-4 py-2 bg-pink-700  rounded-md">
          <p className='text-white'>Go to Blog List</p>
        </Link>

      </div>
    </div>
  );
}

export default Home;
