
import { useState } from 'react';

import './App.css';

import { SearchInput } from './components/SearchInput';

import { getFeeds } from './request/feedRequest';

interface Feeds {
  title: string,
  link: string
}

function App() {
  const [feeds, setFeeds] = useState<Feeds[]>([])

  const handleSearch = async () => {

    const response = await getFeeds();

    console.log(response);

    if (response && response.items) {
      setFeeds(response.items);
    }

  }

  return (
    <div className="App">
      <SearchInput onSearch={ handleSearch }/>
    </div>
  );
}

export default App;
