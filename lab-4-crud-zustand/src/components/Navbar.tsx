import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-pink-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">📝 Majo's Blog</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:underline">Blog List</Link>
          </li>
          <li>
            <Link to="/blog/new" className="hover:underline">Add Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
