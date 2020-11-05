import "./app.css";
import { useState } from "react";

// FIXTURES
import SongsList from "../fixtures/";

// COMPONENTS
import Player from "../components/Player";

export default function App() {
  const [songs, setSongs] = useState(SongsList);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="app">
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </div>
  );
}
