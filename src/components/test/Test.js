import {useState} from 'react';
import ProgresBarTest from './ProgresBarTest';
import ResultsTest from './ResultsTest';
import {getTestByModule} from '../../services/api/test';
import {ToastContainer} from 'react-toastify';
import {Notification} from '../notification/Notification';
import {useUserContext} from '../../contexts/UserContext';
import {addProgressApi, getProgressUserAPi} from '../../services/api/progress';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function (props) {
  const {module} = props;
  const [isFinished, setIsFinished] = useState(false);
  const [test] = useState(getTestByModule(module));
  const [totalQuestions] = useState(test.length);
  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState(0);
  const [success, setSuccess] = useState(undefined); // valor seleccion del elemento
  const [countResult, setCountResult] = useState(0);
  const [option, setOption] = useState(null);
  const [progress, setProgress] = useState('0%');
  const {user, login} = useUserContext();

  function selected(value) {
    return value ? setSuccess(1) : setSuccess(0);
  }

  async function nextQuestion() {
    let total = totalQuestions - 1;
    if (indexCurrentQuestion < totalQuestions - 1 && success !== undefined) {
      setIndexCurrentQuestion(indexCurrentQuestion + 1);
      setCountResult(countResult + success);
      setSuccess(undefined);
      setOption(null);
      setProgress(
        Math.trunc(((indexCurrentQuestion + 1) * 100) / totalQuestions) + '%',
      );
    } else if (success === undefined) {
      await Notification('Debes seleccionar una respuesta');
    } else {
      //Termina el test
      const sum = countResult + success;
      setCountResult(sum);
      //setIsFinished(true);

      const rest = await addProgressApi(
        {
          module: module.toString(),
          percentage: Math.trunc((sum * 100) / totalQuestions),
        },
        user,
      ).then(async () => {
        const updtUser = await getProgressUserAPi(user.email);
        console.log(updtUser);
        login(updtUser);
        setIsFinished(true);
      });
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8 mt-14 text-center">
      {!isFinished ? (
        <div className="flex flex-col justify-center py-4">
          <ProgresBarTest module={module} progress={progress} />
          <p className="text-2xl">
            <b>{test[indexCurrentQuestion].question} </b>
          </p>
          {test[indexCurrentQuestion].options.map(item => (
            <div
              key={item.id}
              className={classNames(
                option === item.id
                  ? 'my-4 border-2 border-b-8 border-sky-300 rounded-xl py-2'
                  : 'my-4 border-2 border-b-8 border-slate-400 rounded-xl py-2',
              )}
              onClick={() => {
                setOption(item.id);
                selected(item.isTrue);
              }}>
              <p>{item.answer}</p>
            </div>
          ))}
          <button
            className="mt-5 rounded-xl bg-purple-600 p-2 text-white"
            onClick={nextQuestion}>
            <b>Siguiente</b>
          </button>
        </div>
      ) : (
        <ResultsTest
          totalQuestions={totalQuestions}
          countResult={countResult}
          module={module}
        />
      )}
      <ToastContainer />
    </div>
  );
}
