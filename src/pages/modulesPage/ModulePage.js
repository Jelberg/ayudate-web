import {ToastContainer} from 'react-toastify';

import Header from '../../layouts/header.js';
import Footer from '../../layouts/footer.js';
import LearningModules from '../../components/modules/LearningModules.js';

export default function () {
  return (
    <div className="">
      <Header />
      <LearningModules />
      <Footer />
      <ToastContainer />
    </div>
  );
}
