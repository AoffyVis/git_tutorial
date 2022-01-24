import './App.css';
import { useState } from 'react';
import { Grid } from '@mui/material'
import { SearchBar, VideoList, VideoDetail } from './components'
import youtube from './api/youtube'

function App() {

  const [ videos, setVideos ] = useState([]);
  const [ selectedVideo, setSelectedVideo ] = useState(null)

  const KEY = process.env.REACT_APP_API_KEY;
  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', { 
      params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        q: searchTerm,
      } 
    });
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  return (
    <>
      <Grid justifyContent='center' container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList onVideoSelect={setSelectedVideo} videos={videos}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
