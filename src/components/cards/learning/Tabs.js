import React from 'react';
import {useState} from 'react';
import bdVideos from '../../../utils/database/videos.json';
import Player from './Player';

export default function TabsDefault() {
  const [videos] = useState(bdVideos);
  const [currentListVideos, setcurrentListVideos] = useState(
    videos?.filter(video => video.type === 1),
  );
  const [selected, setSelected] = useState(1);
  const [youtubeID, setyoutubeID] = useState(currentListVideos[0].id);

  const data = [
    {
      label: 'MÓDULO I',
      value: 1,
      list: videos?.filter(video => video.type === 1),
    },
    {
      label: 'MÓDULO II',
      value: 2,
      list: videos?.filter(video => video.type === 2),
    },
    {
      label: 'MÓDULO III',
      value: 3,
      list: videos?.filter(video => video.type === 3),
    },
    {
      label: 'MÓDULO IV',
      value: 4,
      list: videos?.filter(video => video.type === 4),
    },
  ];

  return (
    <div className="flex flex-wrap">
      <div>
        <Player youtubeID={youtubeID} />
      </div>
      <div>
        <div className="flex flex-row flex-wrap">
          {data.map(obj => {
            return (
              <a
                onClick={() => {
                  setSelected(obj.value);
                  let filter = videos?.filter(
                    video => video.type === obj.value,
                  );
                  setcurrentListVideos(filter);
                  setyoutubeID(filter[0].id);
                }}
                className="rounded-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ml-4 p-3">
                <label className="font-medium text-slate-50">{obj.label}</label>
              </a>
            );
          })}
        </div>
        <div>
          {' '}
          {currentListVideos.map(obj => (
            <div
              onClick={() => {
                setyoutubeID(obj.id);
              }}
              className="w-full p-4 hover:bg-slate-200">
              <a>{obj.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
