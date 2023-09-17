import Artist from "./Artist.js";
import { EmptyResults } from "../utils/EmptyResults.js";

export default function ListArtist({ response }) {
  const artists = response.filter((artist) => {
    if (artist.images.length > 0) return artist;
  });

  return (
    <div>
      {" "}
      {artists.length > 0 ? (
        <div>
          <div className="flex justify-center">
            <h1 className="self-center mt-5 mb-5 text-xl text-white font-bold">
              Artistas
            </h1>
          </div>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 5xl:grid-cols-3 gap-2 gap-y-12">
            {artists.map((artist) => {
              return (
                <div key={artist.id} className="flex justify-center grid">
                  <Artist
                    id={artist.id}
                    genres={artist.genres}
                    images={artist.images}
                    name={artist.name}
                    popularity={artist.popularity}
                    artist={artist}
                  />
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
