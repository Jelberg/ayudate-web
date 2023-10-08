import CardProgress from '../../components/home/CardProgress.js';
import CardLearning from '../../components/learning/CardLearning.js';

export default function (props) {
  const {user} = props;
  return (
    <div className="overflow-auto gap-8 place-content-center place-items-center md:bg-cover p-8">
      <CardProgress progress={user.progress} />
    </div>
  );
}
