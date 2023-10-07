import CardProgress from '../../components/cards/CardProgress.js';
import CardLearning from '../../components/cards/learning/CardLearning.js';

export default function (props) {
  const {bgImage, user} = props;
  return (
    <div
      className="flex flex-wrap gap-8 place-content-center place-items-center md:bg-contain h-screen p-8"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}>
      <CardProgress progress={user.progress} />
    </div>
  );
}
