import Album from "./Album.js";
import useFilter from "../../hooks/useFilter.js";
import { EmptyResults } from "../utils/EmptyResults.js";

export default function ListAlbum(props) {
  const { albumes } = props;
  const { type } = useFilter();
  console.log(albumes);

  return (
    <div>
      {" "}
      {albumes.length > 0 ? (
        <div>
          <div className="flex justify-center">
            {type === "mi" ? (
              <h1 className="self-center mt-5 mb-5 text-xl text-white font-bold">
                Mis Álbumes Guardados - Total: {albumes.length}
              </h1>
            ) : (
              <h1 className="self-center mt-5 mb-5 text-xl text-white font-bold">
                Álbumes
              </h1>
            )}
          </div>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 5xl:grid-cols-3 gap-2 gap-y-12">
            {albumes.map((album) => {
              return (
                <div key={album.id} className="flex justify-center grid">
                  <Album album={album} />
                </div>
              );
            })}
          </section>
        </div>
      ) : (
        <EmptyResults />
      )}
    </div>
  );
}
