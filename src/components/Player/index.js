import { useState, useRef, useEffect } from "react";
import "./player.css";
import PropTypes, { number } from "prop-types";

// COMPONENTS
import Controls from "../Controls";
import Details from "../Details";

export default function Player({
  currentSongIndex = 0,
  setCurrentSongIndex,
  nextSongIndex = 1,
  songs,
}) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);

  // next/back index from songs[]
  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="c-player">
      <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
      <h4>Playing now</h4>
      <Details song={songs[currentSongIndex]} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p>
        <strong>Next up:</strong>
        <span>
          {songs[nextSongIndex].title} by {songs[nextSongIndex].artist}
        </span>
      </p>
    </div>
  );
}

// Test default values
Player.propTypes = {
  currentSongIndex: PropTypes.number,
  setCurrentSongIndex: PropTypes.func.isRequired,
  nextSongIndex: PropTypes.number,
  songs: PropTypes.array.isRequired,
};
