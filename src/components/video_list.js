
import React from 'react';
import VideoListItem from './video_item'

//argument from parent comp that is App.js


// always always remember component name should start with capital letters

// in functional component props is a argument

// we use functional component if we just want to render JSX


// video list
const VideoList = ({videos,onVideoSelect}) => {
    // MAP Function will return an array of videolist item component with the respective video
    const videoItems = videos.map((item) => {
       return (
           <VideoListItem
             onVideoSelect={onVideoSelect}
             key={item.etag} // setting a key to each item in the item
             videoItem={item}
          />
);
    });

     return(
        <ul className="col-md-4 list-group">
        {videoItems} // reference to javascript varaiable inside jsx expression // react will recognize the array of components and display one after the other
      </ul>
    );
};

export default VideoList;