import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import EditPost from './pages/EditPost';
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/new" element={<AddPost />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog:id" element={<BlogDetail />} />
        <Route path="/blog/edit/:id" element={<EditPost />} />
      </Routes>
    </>
  )
}

export default App
