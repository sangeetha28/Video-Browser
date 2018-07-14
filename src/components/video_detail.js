import React from 'react';


//we just need only props for this component

// not a state

const VideoDetail = ({videos}) => {
  // if no video
  if(!videos) {

    // return statement will make this function return to the caller so no further statements or render method will be executed....
    return <div> Loading..... </div>
  }


  const videoId = videos.id.videoId;

  const url = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">

      //iframe will point to the url and display the video player inside our application
      <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
      <div>{videos.snippet.title}</div>
      <div>{videos.snippet.description}</div>
        </div>
</div>);
}


export default VideoDetail;