import { useState } from "react";
import useAuth from "../../hooks/useAuth.js";
import { ToastContainer } from "react-toastify";

import Header from "../../layouts/header.js";
import Footer from "../../layouts/footer.js";

export default function () {
  const { logout, auth } = useAuth();
  const [text, setText] = useState("");


  const exit = () => {
    logout();
  };


  const handlerInput = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="">
      <Header />

      <Footer />
      <ToastContainer />
    </div>
  );
}
