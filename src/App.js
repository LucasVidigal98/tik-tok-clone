import React, { useState, useEffect } from "react";

import Video from "./components/Video";
import db from "./firebase";

import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={shares}
              messages={messages}
              shares={likes}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
