import {useLocation} from 'wouter';

export default function (props) {
  const {progress, module} = props;
  const [, setLocation] = useLocation();

  const goTo = () => {
    setLocation('learning/' + module);
  };

  return (
    <div className="flex flex-row gap-4 mt-2 justify-center">
      <a onClick={goTo} className=" justify-center text-slate-500 w-[20px]">
        X
      </a>
      <div className="w-full bg-gray-200 rounded-full h-7 dark:bg-gray-700 mb-6">
        <div
          className="bg-green-400 h-7 rounded-full"
          style={{width: `${progress}`}}></div>
      </div>
      <p>{progress}</p>
    </div>
  );
}
