import MissionIcon from './MissionIcon';

export default function Mission(props) {
  const { title, description, points, type } = props;
  return (
    <div className="flex p-4 space-x-4">
      <MissionIcon type={type} />
      <div className="flex-1">
        <p className="text-xl font-semibold">{title}</p>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
      <div className="text-gray-500">{points} Points</div>
    </div>
  );
}
