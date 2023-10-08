import ContentModule from './ContentModule';
export default function (props) {
  const {module} = props;
  return (
    <div className="flex flex-wrap justify-center py-8">
      <ContentModule module={module} />
    </div>
  );
}
