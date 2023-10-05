import {useState} from 'react';
import {ToastContainer} from 'react-toastify';
import useAuth from '../../hooks/useAuth.js';
import schools from './schools.json';
import {createUserApi} from '../../services/api/user.js';
import UserDomain from '../../domain/UserDomain.js';
import {useFormik} from 'formik';
import {Notification} from '../notification/Notification.js';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [items] = useState(schools);
  const [education, setEducation] = useState('');
  const [messagePwsd, setMessagePwsd] = useState('');
  const [messageEmail, setMessageEmail] = useState('');
  const [messageUser, setMessageUser] = useState('');
  const {token} = useAuth();

  const handleInputName = event => {
    let text = event.target.value;
    if (text.length < 5) {
      setMessageUser({
        error: 'Minimo 5 caracteres',
      });
    } else if (!/^[a-zA-Z0-9 ]+$/.test(text)) {
      setMessageUser({
        error: 'Debe tener caracteres alfanúmericos',
      });
    } else {
      setMessageUser({text, error: ''});
    }
    formik.setFieldValue('user', text);
    setName(text);
  };

  const handleSelect = event => {
    let text = event.target.value;
    setEducation(text);
    formik.setFieldValue('school', text);
  };

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
    setEmail(text);
    formik.setFieldValue('email', text);
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
    setPass(text);
    formik.setFieldValue('password', text);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    onSubmit: async formValue => {
      if (
        messageEmail.error === '' &&
        messagePwsd.error === '' &&
        messageUser.error === '' &&
        education !== null
      ) {
        const {email, password, user} = formValue;
        if (email && password && user) {
          const newUser = new UserDomain();
          newUser.email = email;
          newUser.password = password;
          newUser.user = user;
          newUser.school = education;
          await createUserApi(newUser).then(async res => {
            if (res.data.email) {
              await Notification(
                'Usuario creado con exito, por favor inicie sesion',
                'success',
              );
            } else {
              await Notification(
                'Este correo ya esta registrado en la aplicación',
                'warning',
              );
            }
          });
        } else {
          await Notification('Existen campos vacios', 'error');
        }
      } else {
        await Notification(
          'Error en el formulario: Los campos no tienen los parametros correctos',
          'error',
        );
      }
    },
  });

  function initialValues() {
    return {
      email: '',
      password: '',
      user: '',
      school: '',
    };
  }

  return (
    <div className="grid h-full w-full p-12 grid-cols-1 place-content-center space-y-6">
      <div>
        <label className="text-white">Nombre y Apellidos</label>
        <input
          onChange={text => {
            handleInputName(text);
          }}
          name="name"
          value={formik.values.user}
          className="rounded-md py-3 pl-2 pr-3 h-18 w-full placeholder:text-slate-400"
          type="text"
        />
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          {messageUser.error}
        </p>
      </div>
      <div>
        <label className="text-white">Correo</label>
        <input
          onChange={handleInputEmail}
          name="email"
          className="rounded-md py-3 pl-2 pr-3 h-18 w-full placeholder:text-slate-400"
          type="email"
          value={formik.values.email}
        />
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          {messageEmail.error}
        </p>
      </div>
      <div>
        <label className="text-white">Selecciona tu colegio</label>
        <div>
          <select
            required={true}
            onChange={handleSelect}
            className="rounded-md py-3 pl-2 pr-3 h-18 w-full">
            {items.map(school => {
              return (
                <option key={school.value} value={school.value}>
                  {school.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div>
        <label className="text-white">Contraseña</label>
        <input
          onChange={handleInputPass}
          value={formik.values.password}
          name="pass"
          maxLength={20}
          minLength={5}
          placeholder="Contraseña - Max 20"
          className="rounded-md py-3 pl-2 pr-3 h-18 w-full placeholder:text-slate-400"
          type="password"
        />
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          {messagePwsd.error}
        </p>
      </div>
      <div>
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className="text-white rounded-md font-bold py-3 pl-2 pr-3 shadow-sm h-19 bg-fuchsia-700 w-full text-center">
          REGISTRARSE
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
