export default function (props) {
  const {totalQuestions, countResult} = props;
  const totalErrors = totalQuestions - countResult;
  const imgPath = process.env.PUBLIC_URL + '/gif/confetti-gradient.gif';
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row justify-center">
        <img className="w-56" src={imgPath} />
      </div>
      <div>
        <p className="text-3xl">
          <b>FELICIDADES!</b>
        </p>
        <p className="mt-6 text-xl text-slate-600">Terminaste el Test</p>
        <p className="text-xl text-slate-600">Aquí están tus resultados.</p>
      </div>
      <div className="flex flex-row gap-14 justify-center pt-5">
        {' '}
        <div className="bg-green-400 text-2xl p-4 rounded-2xl text-white">
          <p>
            <b>ACIERTOS</b>
          </p>
          <p>
            <b>{countResult}</b>
          </p>
        </div>
        <div className="bg-rose-700 text-2xl p-4 rounded-2xl text-white">
          <p>
            <b>ERRORES</b>
          </p>
          <p>
            <b>{totalErrors}</b>
          </p>
        </div>
      </div>
      <button className="mt-8 rounded-2xl bg-purple-900 p-2 text-white">
        CONTINUAR
      </button>
    </div>
  );
}
