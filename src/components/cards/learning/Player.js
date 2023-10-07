import React from 'react';
import YouTube from 'react-youtube';

export default function (props) {
  const {youtubeID} = props;
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return <YouTube videoId={youtubeID} opts={opts} />;
}
