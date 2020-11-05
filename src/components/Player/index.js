import "./player.css";
import PropTypes from "prop-types";

// COMPONENTS
import Controls from "../Controls";
import Details from "../Details";

export default function Player({ song, nextSong }) {
  return (
    <div className="c-player">
      <audio></audio>
      <h4>Playing now</h4>
      <Details song={song} />
      <Controls isPlaying={false} />
      <p>
        Next up:{" "}
        <span>
          {nextSong.title} by {nextSong.artist}
        </span>
      </p>
    </div>
  );
}

Player.propTypes = {
  song: PropTypes.object.isRequired,
  nextSong: PropTypes.object.isRequired,
};
