import {useRoute} from 'wouter';
import Footer from '../../layouts/footer.js';
import Notfound from '../utilsPage/Notfound.js';
import Test from '../../components/test/Test.js';

export default function () {
  const [match, params] = useRoute('/test/:module');

  if (parseInt(params?.module) > 0 && parseInt(params?.module) < 5) {
    return (
      <div className="">
        <Test module={params?.module} />
        <Footer />
      </div>
    );
  } else return <Notfound />;
}
