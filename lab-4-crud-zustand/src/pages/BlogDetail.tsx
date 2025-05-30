import { useParams, useNavigate, Link } from 'react-router-dom';
import { usePostStore } from '../store/post.store';
import toast from 'react-hot-toast';

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, deletePost } = usePostStore();

  const post = posts.find((p) => p.id === id);

  const handleDelete = () => {
    if (id) {
      deletePost(id);
      toast.success('Post deleted!');
      navigate('/blog');
    }
  };

  if (!post) {
    return <p className="text-center text-red-500">Post not found.</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto border border-gray-300 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">{post.text}</h2>
      <div className="space-x-4">
        <Link to={`/blog/edit/${post.id}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Edit</button>
        </Link>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BlogDetail;
