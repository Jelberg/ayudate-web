import Progress from './Progress';

export default function (props) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="">
        <div className="md:shrink-0"></div>
        <div className="p-10">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            INFORMACIÓN
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline mb-8">
            Este es tu progreso actualmente
          </p>

          <Progress />
        </div>
      </div>
    </div>
  );
}
