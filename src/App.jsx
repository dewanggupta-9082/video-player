import VideoPlayer from './components/shared/video-player';
import videoUrl from "./assets/video.mp4"

function App() {
  return (
    <div className="App">
      <VideoPlayer
         videoUrl={videoUrl}
        description="Justin Bieber - Baby ft. Ludacris"
      />
    </div>
  );
}

export default App;