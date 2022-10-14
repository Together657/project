import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import About from "./Components/Pages/About";
import Login from "./Components/Pages/auth/Login";
import Topic from "./Components/Pages/auth/Topic";
import Home from "./Components/Pages/Home";
import Layout from "./Components/Pages/Layout";
import Post from "./Components/Pages/Post";
// import Profile from './Components/Pages/auth/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="post" element={<Post />} />
            <Route path="home" element={<Home />} />
            <Route path="topic" element={<Topic />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
