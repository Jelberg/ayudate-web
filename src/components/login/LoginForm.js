import {useState} from 'react';
import {Notification} from '../notification/Notification.js';
import {ToastContainer} from 'react-toastify';
import {loginApi} from '../../services/api/user.js';
import {useFormik} from 'formik';
import {useLocation} from 'wouter';
import {useUserContext} from '../../contexts/UserContext.js';
import useAuth from '../../hooks/useAuth.js';

export default function LoginForm() {
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [, setLocation] = useLocation();
  const [messageEmail, setMessageEmail] = useState('');
  const [messagePwsd, setMessagePwsd] = useState('');
  const {login} = useUserContext();
  const {token} = useAuth();

  const handleInputEmail = event => {
    let text = event.target.value;
    if (text.length < 5) {
      setMessageEmail({
        error: 'Minimo 5 caracteres',
      });
    } else if (!/\S+@\S+\.\S+/.test(text)) {
      setMessageEmail({
        error: 'Ingrese formato de correo válido',
      });
    } else {
      setMessageEmail({text, error: ''});
    }
    formik.setFieldValue('email', text);
    setEmail(text);
  };

  const handleInputPass = event => {
    let text = event.target.value;
    if (text.length < 5) {
      setMessagePwsd({
        error: 'Minimo 5 caracteres',
      });
    } else if (!/^[a-zA-Z0-9]+$/.test(text)) {
      setMessagePwsd({
        error: 'Debe tener caracteres alfanúmericos',
      });
    } else {
      setMessagePwsd({text, error: ''});
    }
    formik.setFieldValue('password', text);
    setPass(text);
  };

  const goToPage = () => {
    setLocation('/signup');
  };

  const goToHome = () => {
    setLocation('/home');
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    onSubmit: async formValue => {
      const {email, password} = formValue;
      if (messageEmail.error === '' && messagePwsd.error === '') {
        if (email && password) {
          await loginApi(email, password).then(res => {
            console.log(res.data);
            if (Object.keys(res).length === 0)
              Notification('Usuario o contrasena no existen', 'error');
            else {
              login(res.data);
              goToHome();
            }
          });
        } else {
          Notification('Existen campos vacios', 'warning');
        }
      } else {
        Notification(
          'Los datos que ingreso no cumplen con los parametros, por favor revise los campos',
          'error',
        );
      }
    },
  });

  function initialValues() {
    return {
      email: '',
      password: '',
    };
  }

  return (
    <div className="grid h-full min-w-max w-full rounded-md border-2 border-white p-12 grid-cols-1 place-content-center space-y-8">
      <div>
        <label className="text-white">Correo</label>
        <input
          value={formik.values.email}
          onChange={handleInputEmail}
          name="email"
          className="rounded-md py-3 pl-2 pr-3 h-18 w-full placeholder:'Correo' placeholder:text-slate-400"
          type="email"
        />
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {messageEmail.error}
        </p>
      </div>
      <div>
        <label className="text-white">Contraseña</label>
        <input
          value={formik.values.password}
          onChange={handleInputPass}
          name="pass"
          className="rounded-md py-3 pl-2 pr-3 h-18 w-full placeholder:'Contraseña' placeholder:text-slate-400"
          type="password"
        />
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {messagePwsd.error}
        </p>
      </div>
      <div>
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className="text-white rounded-md font-bold py-3 pl-2 pr-3 shadow-sm h-19 bg-violet-950 w-full text-center">
          Iniciar Sesion
        </button>
      </div>
      <div className="grid place-content-center text-white  text-center">
        <h1> - O - </h1>
        <label className="font-bold text-lg" onClick={goToPage}>
          REGISTRARSE
        </label>
      </div>
      <ToastContainer />
    </div>
  );
}
