import { useState } from "react";
import useAuth from "../../hooks/useAuth.js";
import searchApi from "../../services/search/seachApi.js";
import { ToastContainer } from "react-toastify";
import { Notification } from "../../components/notification/Notification.js";
import { FILTER_TYPE } from "../../const/utils.js";
import Filter from "../../components/utils/Filter.js";
import ListArtist from "../../components/artists/ListArtists.js";
import { useAlbumContext } from "../../contexts/AlbumContext.js";
import useFilter from "../../hooks/useFilter.js";
import ListAlbum from "../../components/albums/ListAlbum.js";

import Header from "../../layouts/header.js";
import Footer from "../../layouts/footer.js";

export default function () {
  const { logout, auth } = useAuth();
  const [text, setText] = useState("");
  const [artists, setArtists] = useState([]);
  const [searchAlbums, setSearchAlbums] = useState([]);
  const { albumList, albums } = useAlbumContext();
  const { type } = useFilter();

  const exit = () => {
    logout();
  };

  const search = async () => {
    if (text === "") {
      await Notification("Campo de búsqueda no debe estar vacio", "error");
    } else {
      if (type === FILTER_TYPE.album) {
        const sAlbum = await searchApi(auth, text, type);
        console.log(sAlbum);
        setSearchAlbums(sAlbum.albums.items);
      } else if (type === FILTER_TYPE.artist) {
        const artista = await searchApi(auth, text);
        setArtists(artista.artists.items);
      }
    }
  };

  const handlerInput = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="">
      <Header />

      <Footer />
      <ToastContainer />
    </div>
  );
}
