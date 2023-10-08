export default function (props) {
  const {imgPath} = props;
  return (
    <div className="w-[250px]">
      <img className="rounded-3xl h-[150px]" src={imgPath} />
    </div>
  );
}
