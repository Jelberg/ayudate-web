import React from 'react';
import SignUpForm from '../../components/signup/SignUpForm';
import {useLocation} from 'wouter';

export default function SignUp() {
  const [, setLocation] = useLocation();
  const goToPage = () => {
    setLocation('/login');
  };
  return (
    <div className="grid place-content-center h-screen h-screen bg-gradient-to-r to-violet-600 from-purple-800">
      <label className="text-white mb-10 " onClick={goToPage}>
        👈 Volver
      </label>
      <div className="text-center text-white">
        <h1 className="text-white font-bold text-5xl">REGISTRATE</h1>
        <h3>Llena los datos a continuación</h3>
        <h3>Si ya posses una cuenta, inicia sesión</h3>
      </div>

      <div className="h-screnn">
        <SignUpForm />
      </div>
    </div>
  );
}
