import {ToastContainer} from 'react-toastify';
import {useRoute} from 'wouter';
import {useLocation} from 'wouter';

import Header from '../../layouts/header.js';
import Footer from '../../layouts/footer.js';
import CardLearning from '../../components/learning/CardLearning.js';
import Notfound from '../utilsPage/Notfound.js';

export default function () {
  // `match` is boolean
  const [match, params] = useRoute('/learning/:module');

  if (parseInt(params?.module) > 0 && parseInt(params?.module) < 5) {
    return (
      <div className="">
        <Header />
        <CardLearning module={params.module} />
        <Footer />
        <ToastContainer />
      </div>
    );
  } else return <Notfound />;
}
