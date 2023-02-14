import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import PostsPage from "./pages/postsPage/PostsPage";
import PostPage from "./pages/postPage/PostPage";
import EditPostPage from "./pages/editPostPage/EditPostPage";
import AddPostPage from "./pages/addPostPage/AddPostPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMe } from "./redux/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path=":id" element={<PostPage />} />
          <Route path=":id/edit" element={<EditPostPage />} />
          <Route path="new" element={<AddPostPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
        <ToastContainer position="bottom-right" />
      </Layout>
    </div>
  );
}

export default App;
