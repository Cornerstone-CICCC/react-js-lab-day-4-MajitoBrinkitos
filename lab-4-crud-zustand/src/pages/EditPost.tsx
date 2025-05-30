import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePostStore } from '../store/post.store';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, updatePost, deletePost } = usePostStore();

  const post = posts.find((p) => p.id === id);

  const [editedText, setEditedText] = useState('');

  useEffect(() => {
    if (post) {
      setEditedText(post.text);
    }
  }, [post]);

  const handleSave = () => {
    if (id) {
      updatePost(id, editedText);
      navigate('/blog'); // or wherever you want to redirect
    }
  };

  const handleDelete = () => {
    if (id) {
      deletePost(id);
      navigate('/blog');
    }
  };

  if (!post) {
    return <p className="text-center text-red-500">Post not found.</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="col-span-3 flex flex-col items-center space-y-4 border border-black p-4 rounded-md text-pink-700">
        <h2 className="text-xl font-bold">Edit Post</h2>
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="border border-gray-400 p-2 rounded-md w-full"
        />
        <div className="space-x-4">
          <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded-md">
            Save
          </button>
          <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
