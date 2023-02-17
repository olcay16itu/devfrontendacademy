import React from "react";
import YouTube from 'react-youtube';
import "./Home.css"

const _onReady=(event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
};


function Home(props){
    return(
      <div >
   <YouTube videoId={props.videoId} opts ={opts} onReady={_onReady} 
   className="videoresponsive" iframeClassName="videoresponsive"
  ></YouTube>
  </div>
  )
}
export default Home;