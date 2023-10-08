import LoginForm from '../../components/login/LoginForm.js';

export default function Login() {
  return (
    <div className="grid h-screen content-center place-items-center bg-gradient-to-r from-violet-800 to-purple-800">
      <div className="w-24">
        <img src={`${process.env.PUBLIC_URL}/icon.png`} />
      </div>
      <div className="mb-12">
        <h1 className="text-white font-bold text-5xl">BIENVENIDO!</h1>
      </div>

      <div className="h-screnn">
        <LoginForm />
      </div>
    </div>
  );
}
