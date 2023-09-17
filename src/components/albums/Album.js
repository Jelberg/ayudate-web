import React, { useState } from "react";

export default function Album(props) {
  const { album } = props;

  console.log(album);

  return (
    <>
      <article className="group flex flex-col rounded-md p-5 bg-slate-800 w-56 h-50">
        <div className="self-center">
          <img
            alt={`Portada de ${album.name}`}
            src={album.images[1].url}
            className=" w-24 h-24 rounded w-full h-full transition-opacity group-hover:blur-sm group-hover:opacity-3"
          />
        </div>

        <h3 className="self-center mt-5 text-xl text-white font-bold">
          {album.name}
        </h3>
        <p className=" self-center text-white ">{album.type}</p>
      </article>
    </>
  );
}
