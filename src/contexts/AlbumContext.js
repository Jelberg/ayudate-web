import { useState, createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

const AlbumContext = createContext({
  albums: [],
  albumList: [],
});

export function AlbumProvider({ children }) {
  const [albums, setAlbums] = useLocalStorage("");
  const [albumList, setAlbumList] = useLocalStorage([]);

  // add to list
  const addAlbumList = (album) => {
    console.log(album);
    setAlbums(1);
    setAlbumList([...albumList, album]);
  };

  return (
    <AlbumContext.Provider
      value={{
        albums,
        albumList,
        addAlbumList,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
}

export const useAlbumContext = () => useContext(AlbumContext);
