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
    <div className="bg-gray-900 px-20">
      <div className="flex flex-row place-content-between p-3">
        <div className="">
          <img width="60%" src={`${process.env.PUBLIC_URL}/LOGOEXAMPLE.png`} />
        </div>
        <button className="text-white" onClick={exit}>
          {" "}
          Cerrar sesion
        </button>
      </div>

      <div className="grid mt-12 mb-12 ">
        <div className="flex flex-row w-6/12 mb-3 place-self-center">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative bg-white text-white m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Buscar"
              aria-label="Search"
              onChange={handlerInput}
              aria-describedby="button-addon1"
            />

            <button
              className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={search}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <Filter />
        </div>
      </div>

      {type === FILTER_TYPE.mi ? <ListAlbum albumes={albumList} /> : null}

      {type === FILTER_TYPE.album ? <ListAlbum albumes={searchAlbums} /> : null}

      {type === FILTER_TYPE.artist ? <ListArtist response={artists} /> : null}

      <ToastContainer />
    </div>
  );
}
