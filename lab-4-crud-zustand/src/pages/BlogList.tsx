import { Link } from 'react-router-dom';
import { usePostStore } from '../store/post.store';

function BlogList() {
  const { posts } = usePostStore();

  return (
    <div className="grid grid-cols-3 gap-4 h-180 place-content-center bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link to="/blog/new">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md">
            Create Post
          </button>
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet. Start by creating one!</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border border-gray-300 p-4 rounded-md shadow-sm">
              <Link to={`/blog/${post.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                {post.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BlogList;
