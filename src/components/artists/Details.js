import { useAlbumContext } from "../../contexts/AlbumContext.js";
import { ToastContainer } from "react-toastify";
import { Notification } from "../notification/Notification.js";

export default function Details(albums, artist) {
  const { addAlbumList } = useAlbumContext();

  const handleAlbum = async (id) => {
    try {
      console.log(albums.albums.id);
      console.log(albums.albums);
      let newAlbum = "";
      albums.albums.forEach((album) => {
        if (album.id === id) {
          console.log(album.id + " === " + id);
          newAlbum = album;
          return newAlbum;
        }
      });
      addAlbumList(newAlbum);
      await Notification("Album agregado con exito! ❤️", "success");
    } catch (error) {
      await Notification("Ha ocurrido un error", "error");
      console.log(error);
    }
  };

  return (
    <div className="grid ">
      <div>
        <table className="h-60 overflow-y-auto table-auto">
          <thead>
            <tr className="text-white">
              <th></th>
              <th>Album</th>
              <th>Tracks</th>
              <th>Año</th>
            </tr>
          </thead>
          <tbody>
            {albums.albums.map((album, index) => (
              <tr
                key={album.id}
                className="border-t border-slate-600 mt-10 text-white"
                onClick={() => handleAlbum(album.id)}
              >
                <td>
                  <img src={`${album.images[2].url}`} />{" "}
                </td>
                <td>{album.name}</td>
                <td>{album.total_tracks}</td>
                <td>{album.release_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}
