import React, { useState } from "react";
import Modal from "../utils/Modal.js";
import Details from "./Details.js";
import useAuth from "../../hooks/useAuth.js";
import getAlbumsByArtistsApi from "../../services/search/getAlbumsByArtists.js";

export default function Artist(props) {
  const { id, genres, images, name, popularity, artist } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [albums, setAlbums] = useState([]);
  const { auth } = useAuth();

  const openModal = async () => {
    await getAlbumsByArtistsApi(id, auth).then(async (info) => {
      setAlbums(info);
      setIsModalOpen(true);
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <article
        onClick={openModal}
        className="group flex flex-col rounded-md p-5 bg-slate-800 w-56 h-50"
      >
        <div className="self-center">
          <img
            alt={`Portada de ${name}`}
            src={images[1].url}
            className=" w-24 h-24 rounded-full w-full h-full transition-opacity group-hover:blur-sm group-hover:opacity-3"
          />
        </div>

        <h3 className="self-center mt-5 text-xl text-white font-bold">
          {name}
        </h3>
        <p className=" self-center text-white ">Artista</p>
      </article>

      <Modal
        className="grid h-60 overflow-y-auto"
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <button
          className="place-content-end bg-red border hover:bg-gray-400 text-white px-3 py-1 rounded"
          onClick={closeModal}
        >
          X CERRAR
        </button>

        <Details className="" albums={albums} artist={artist} />
      </Modal>
    </>
  );
}
