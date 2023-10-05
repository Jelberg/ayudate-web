import {ToastContainer} from 'react-toastify';

import Header from '../../layouts/header.js';
import Footer from '../../layouts/footer.js';

import {useUserContext} from '../../contexts/UserContext.js';
import ContentHome from './ContentHome.js';

export default function () {
  const {user} = useUserContext();
  const bgImage = process.env.PUBLIC_URL + '/background2.jpg';

  return (
    <div className="">
      <Header />
      <ContentHome bgImage={bgImage} user={user} />

      <Footer />
      <ToastContainer />
    </div>
  );
}
