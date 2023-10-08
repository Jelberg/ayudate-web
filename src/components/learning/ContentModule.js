import React from 'react';
import {useState} from 'react';
import bdVideos from '../../utils/database/videos.json';
import Player from './Player';
import data from '../../utils/database/modules.json';
import Modal from './Modal';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function (props) {
  const {module} = props;
  const pdfModule = data.filter(item => item.module === parseInt(module))[0];
  const [videos] = useState(bdVideos);
  const [currentListVideos] = useState(
    videos?.filter(video => video.type === parseInt(module)),
  );
  const [selected, setSelected] = useState(1);
  const [youtubeID, setyoutubeID] = useState(currentListVideos[0].id);
  const [currentTopic, setcurrentTopic] = useState(1);
  const [openModal, setOpenModal] = useState();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-wrap gap-8 justify-center">
        <div>
          <Player youtubeID={youtubeID} />
        </div>
        <div>
          <div className="bg-white pt-2">
            <a
              className="rounded-2xl bg-rose-700 w-20 p-1 m-2"
              href={pdfModule.link}>
              <label className=" text-sm text-white">
                {' '}
                <b>Ver PDF</b>
              </label>
            </a>
            {currentListVideos.map(obj => (
              <div
                key={obj.id}
                onClick={() => {
                  setSelected(obj.topic);
                  setyoutubeID(obj.id);
                  setcurrentTopic(obj.topic);
                }}
                className={classNames(
                  selected === obj.topic
                    ? 'bg-gray-100 p-4 hover:bg-slate-200'
                    : 'text-gray-700 p-4 hover:bg-slate-200"',
                )}>
                <p className="w-[250px] text-ellipsis overflow-hidden">
                  {obj.topic}. {obj.title}
                </p>
                {selected === obj.topic && (
                  <a
                    className="rounded-2xl bg-slate-400 w-20 p-1 m-2"
                    onClick={() => {
                      setOpenModal('default');
                    }}>
                    <label className="text-sm text-white">
                      <b>Ver Transcripción del video</b>
                    </label>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        setOpenModal={setOpenModal}
        openModal={openModal}
        module={module}
        topic={currentTopic}
      />
    </div>
  );
}
