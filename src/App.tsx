
import { useCallback, useEffect, useMemo, useState } from 'react';

import './App.css';
import { DataList } from './components/DataList';

import { SearchInput } from './components/SearchInput';

import { getFeeds } from './request/feedRequest';

interface Feed {
  title: string,
  link: string,
  media: {
    m: string
  }
}

function App() {
  const [feeds, setFeeds] = useState<Feed[]>([])
  const [page, setPage] = useState(0)
  const [currentFeed, setCurrentFeed] = useState<Feed>({
    title: '',
    link: '',
    media: {
      m: ''
    }
  })

  const fetchFeeds = useCallback(async (tag: string = '') => {
    const response = await getFeeds(tag);

    console.log(response);

    if (response && response.items) {
      setFeeds(response.items);
      setPage(0)
      setCurrentFeed(response.items[0] || {})
    }

  }, [])

  useEffect(() => {
    fetchFeeds();
  }, [fetchFeeds])

  const handleSearch = async (input: string) => {
    fetchFeeds(input);
  }

  const feedItem = useMemo(() => {

    if (currentFeed.link) {

      return (
        <div className="feed-item">
          <b className="feed-title">{currentFeed.title}</b>
          <div className="feed-image-container">
            <img className="feed-image" src={currentFeed.media.m } alt="feed" />
          </div>
        </div>
      )
    }
   
    return null

  }, [currentFeed])


  const handlePaginationChange = useCallback((e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentFeed(feeds[page])
  }, [feeds])

  const __renderFeedList = useMemo(() => {
    
    if (feeds.length) {
      return (
        <div className="data-list">
          <DataList dataDisplayed={feedItem} onChange={handlePaginationChange} count={feeds.length - 1} page={page} />
        </div>
      )
    }

    return null;

  }, [feeds, feedItem, handlePaginationChange, page])

  return (
    <div className="App">
      <SearchInput onSearch={ handleSearch } />
      { __renderFeedList }
    </div>
  );
}

export default App;
