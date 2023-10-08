import {MODULE_NAMES} from '../../utils/constants';
export default function () {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row gap-4 mt-2 justify-center">
        <p className=" justify-center text-slate-500 w-[200px]">
          {MODULE_NAMES[1]}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-7 dark:bg-gray-700 mb-6">
          <div
            className="bg-gradient-to-r from-sky-500 to-indigo-500 h-7 rounded-full"
            style={{width: '100%'}}></div>
        </div>
        <p className="">0%</p>
      </div>

      <div className=" gap-4 flex flex-row mt-2">
        <p className="text-slate-500 w-[200px]">{MODULE_NAMES[2]}</p>
        <div className="w-full bg-gray-200 rounded-full h-7 dark:bg-gray-700 mb-6">
          <div
            className="bg-gradient-to-r from-sky-500 to-indigo-500 h-7 rounded-full"
            style={{width: '30%'}}></div>
        </div>
        <p className="">0%</p>
      </div>

      <div className="gap-4 flex flex-row justify-center  mt-2">
        <p className="text-slate-500 w-[200px]">{MODULE_NAMES[3]}</p>
        <div className="w-full bg-gray-200 rounded-full h-7 dark:bg-gray-700 mb-6">
          <div
            className="bg-gradient-to-r from-sky-500 to-indigo-500 h-7 rounded-full"
            style={{width: '30%'}}></div>
        </div>
        <p className="">0%</p>
      </div>

      <div className="gap-4 flex flex-row justify-center mt-2">
        <p className="justify-center text-slate-500 w-[200px]">
          {MODULE_NAMES[4]}
        </p>
        <div className=" w-full bg-gray-200 rounded-full h-7 dark:bg-gray-700 mb-6">
          <div
            className="bg-gradient-to-r from-sky-500 to-indigo-500 h-7 rounded-full"
            style={{width: '30%'}}></div>
        </div>
        <p className="">0%</p>
      </div>
    </div>
  );
}
