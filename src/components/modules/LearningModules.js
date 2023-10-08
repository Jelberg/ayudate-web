import Items from './Items';
import data from '../../utils/database/modules.json';
import {useState} from 'react';
import useLocation from 'wouter/use-location';

export default function () {
  const [modules] = useState(data);
  const [, setLocation] = useLocation();

  const goTo = location => {
    console.log(location);
    setLocation('/learning/' + location);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="">
        <div className="md:shrink-0"></div>
        <div className="px-10 mt-5">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            MÓDULOS DE APRENDIZAJE
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-between px-8 py-2 ">
          {modules.map(item => (
            <div
              onClick={() => goTo(item?.module)}
              key={item?.module}
              className="p-5 border-2 border-fuchsia-900 rounded-3xl my-4 hover:bg-slate-50">
              <Items imgPath={process.env.PUBLIC_URL + item.img} />
              <label className="text-fuchsia-900">Módulo {item?.module}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
