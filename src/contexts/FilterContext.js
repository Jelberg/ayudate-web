import React, { useState, createContext } from "react";
import { FILTER_TYPE } from "../const/utils.js";

export const FilterContext = createContext({
  type: undefined,
  newFilter: () => {},
});

//Acciones que va a hacer el contexto
export function FilterProvider(props) {
  const { children } = props;

  const [type, setType] = useState(FILTER_TYPE.artist);

  const newFilter = (typeText) => {
    setType(typeText);
  };

  const valueContext = {
    type,
    newFilter,
  };

  return (
    <FilterContext.Provider value={valueContext}>
      {children}
    </FilterContext.Provider>
  );
}
