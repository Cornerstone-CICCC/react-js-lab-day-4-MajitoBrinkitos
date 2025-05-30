import { useState } from 'react';
import { usePostStore } from '../store/post.store';

function AddPost() {
  const [taskText, setTaskText] = useState('');
  const [editingTask, setEditing] = useState<string | null>(null);
  const [editedText, setEditedText] = useState('');

  const { posts, addPost, updatePost, deletePost } = usePostStore();

  const handleAdd = () => {
    if (taskText.trim()) {
      addPost(taskText);
      setTaskText('');
    }
  };

  const handleEdit = (id: string, text: string) => {
    setEditing(id);
    setEditedText(text);
  };

  const handleSave = (id: string) => {
    updatePost(id, editedText);
    setEditing(null);
    setEditedText('');
  };

  return (
    <div className="grid grid-cols-3 gap-4 h-180 place-content-center bg-white">
      <div className="col-span-3 flex flex-col items-center space-y-4 border border-black p-4 rounded-md text-pink-700">
        <input
          className="w-full p-2 border border-gray-400 rounded-md text-black"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a new post"
        />
        <button
          type="button"
          className="px-4 py-2 border border-black rounded-md"
          onClick={handleAdd}
        >
          Add Post
        </button>

        <ul className="w-full mt-4 pl-4">
          {posts.map((post) => (
            <li key={post.id} className="border border-white p-2 rounded-md">
              {editingTask === post.id ? (
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="border border-gray-400 p-2 rounded-md"
                />
              ) : (
                post.text
              )}

              {editingTask === post.id ? (
                <button onClick={() => handleSave(post.id)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(post.id, post.text)}>Edit</button>
              )}

              <button onClick={() => deletePost(post.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddPost;
