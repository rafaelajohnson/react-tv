import { useState } from 'react';
// data.js exports a named “shows” array, not a default
import { shows as initialShows } from './shows/data';

import ShowSelection from './shows/ShowSelection';
import ShowDetails   from './shows/ShowDetails';

export default function App() {
  const [shows]         = useState(initialShows);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <h1>React TV</h1>
        <ShowSelection
          shows={shows}
          setSelectedShow={setSelectedShow}
        />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
