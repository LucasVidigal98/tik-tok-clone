import React, { useRef, useState } from "react";

import VideoFooter from "../VideoFooter";

import "./styles.css";
import SideBar from "../SideBar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    setPlay(!play);

    if (play) videoRef.current.play();
    else videoRef.current.pause();
  };
  //2:07:26
  //"https://v16m.tiktokcdn.com/fe493807d00ab75ec568be0d4517214a/5f46f7aa/video/tos/useast2a/tos-useast2a-ve-0068c003/6cad70a5990d4c7695fac45a82d8f3ff/?a=1233&br=4018&bt=2009&cr=0&cs=0&dr=0&ds=3&er=&l=202008250000420101890660495039AEB5&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3RvNmpuZTs8dTMzODczM0ApNjo6PGdpZDw1N2g2ODdmOGdfYjBmLy1gL2tfLS1hMTZzczZiMTJhXjMtNF41MWAzYS86Yw%3D%3D&vl=&vr="
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <SideBar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
