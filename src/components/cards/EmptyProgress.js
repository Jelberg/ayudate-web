import {MODULE_NAMES} from '../../utils/constants';
export default function () {
  return (
    <div>
      <div className="grid justify-items-center grid-cols-3 gap-4 flex flex-wrap items-end">
        <p className="mt-2 text-slate-500">{MODULE_NAMES[1]}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-1.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{width: '0%'}}></div>
        </div>
        <p className="">0%</p>
      </div>

      <div className="grid justify-items-center grid-cols-3 gap-4 flex flex-wrap items-end">
        <p className="mt-2 text-slate-500">{MODULE_NAMES[2]}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-1.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{width: '0%'}}></div>
        </div>
        <p className="">0%</p>
      </div>

      <div className="grid justify-items-center grid-cols-3 gap-4 flex flex-wrap items-end">
        <p className="mt-2 text-slate-500">{MODULE_NAMES[3]}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-1.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{width: '0%'}}></div>
        </div>
        <p className="">0%</p>
      </div>

      <div className="grid justify-items-center grid-cols-3 gap-4 flex flex-wrap items-end">
        <p className="mt-2 text-slate-500">{MODULE_NAMES[4]}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-1.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{width: '0%'}}></div>
        </div>
        <p className="">0%</p>
      </div>
    </div>
  );
}
