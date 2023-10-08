import {ToastContainer} from 'react-toastify';

import Header from '../../layouts/header.js';
import Footer from '../../layouts/footer.js';

import {useUserContext} from '../../contexts/UserContext.js';
import ContentHome from './ContentHome.js';
import BrainIcon from '../../utils/icons/BrainIcon.js';

export default function () {
  const {user} = useUserContext();

  return (
    <div className="">
      <Header />

      <ContentHome user={user} />
      <Footer />
      <ToastContainer />
    </div>
  );
}
