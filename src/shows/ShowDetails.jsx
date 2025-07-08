import { useState, useEffect } from 'react';
// go up one level (from /shows/) into /episodes/
import EpisodeList    from '../episodes/EpisodeList';
import EpisodeDetails from '../episodes/EpisodeDetails';
// you only have “shows.css” here, so import that
import './shows.css';

export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    if (show && show.episodes.length > 0) {
      setSelectedEpisode(show.episodes[0]);
    } else {
      setSelectedEpisode(null);
    }
  }, [show]);

  if (!show) {
    return <p>Please select a show from above.</p>;
  }

  return (
    <div className="show-details">
      <EpisodeList
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        onSelectEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
