import { Route, Routes } from "react-router-dom";
import "./app.css";
import AlbumCard from "./components/AlbumCard";
import Navbar from "./components/Navbar";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Users from "./pages/Users";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AlbumCard />} />
        <Route path="about" element={<p>about</p>} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
