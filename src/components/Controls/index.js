import "./controls.css";
import PropTypes from "prop-types";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

export default function Controls({ isPlaying, setIsPlaying, SkipSong }) {
  console.log("Controls!!!");

  // console.log("isPlaying :>> ", isPlaying);

  const HandlePlayButton = () => {
    console.log("isPlaying :>> HANDLE PLAYBUTTON", isPlaying);
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="c-player-controls">
      <button className="skip-btn" onClick={() => SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className="play-btn" onClick={HandlePlayButton}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip-btn">
        <FontAwesomeIcon icon={faForward} onClick={() => SkipSong(true)} />
      </button>
    </div>
  );
}

Controls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  SkipSong: PropTypes.func.isRequired,
};
