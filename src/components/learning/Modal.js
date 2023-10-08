import {Button, Modal} from 'flowbite-react';
import VideoTranscription from './VideoTranscription';

export default function (props) {
  const {openModal, setOpenModal, module, topic} = props;

  return (
    <Modal
      show={openModal === 'default'}
      onClose={() => setOpenModal(undefined)}>
      <Modal.Header>Transcripcion del tema {topic}</Modal.Header>
      <Modal.Body>
        <VideoTranscription module={module} topic={topic} />
      </Modal.Body>
    </Modal>
  );
}
