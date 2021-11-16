import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home_, Bookmark_, History_, Playlist_, PlaylistSingle_, VideoPages_, Category_ } from "./pages/index.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home_/>} />
        <Route path="/bookmark" element={<Bookmark_/>} />
        <Route path="/history" element={<History_/>} />
        <Route path="/playlist" element={<Playlist_/>} />
        <Route path="/video/:videoId" element={<VideoPages_/>} />
        <Route path="/playlistSingle" element={<PlaylistSingle_/>} />
        <Route path="/category" element={<Category_/>} />
      </Routes>
    </div>
  );
}

export default App;
