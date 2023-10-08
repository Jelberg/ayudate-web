import React from 'react';

export default function (props) {
  const {youtubeID} = props;

  return (
    <div className="">
      <iframe
        allow="fullscreen"
        className="md:w-[560px] md:h-[315px] object-cover max-sm:h-[250px] max-sm:w-screen"
        src={`https://www.youtube.com/embed/${youtubeID}`}></iframe>
    </div>
  );
}
