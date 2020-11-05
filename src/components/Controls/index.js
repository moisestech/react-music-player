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

export default function Controls({ isPlaying }) {
  return (
    <div className="c-player-controls">
      <button className="skip-btn">
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className="play-btn">
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip-btn">
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

Controls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
};
