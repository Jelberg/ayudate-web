import { FILTERS } from "../../const/utils.js";
import { useState } from "react";
import useFilter from "../../hooks/useFilter.js";

export default function Filter() {
  const [selectedValue, setSelectedValue] = useState(""); // Valor inicial

  const { newFilter } = useFilter();

  const handleSelectChange = (event) => {
    const filter = event.target.value;
    setSelectedValue(filter);
    newFilter(filter);
    console.log(filter);
  };

  return (
    <div className="flex flex-row place-content-start">
      <label className="text-white">Filtro</label>
      <select
        className="rounded m-0 -mr-0.5 block w-28 min-w-0 px-3 py-[0.25rem]"
        onChange={handleSelectChange}
      >
        {FILTERS.map((filter) => (
          <option key={filter.id} value={filter.id}>
            {" "}
            {filter.name}
          </option>
        ))}
      </select>
    </div>
  );
}
