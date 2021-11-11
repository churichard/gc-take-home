import { useMemo } from 'react';
import { MISSION_TYPE } from '../store/store';

export default function MissionIcon(props) {
  const { type } = props;

  const color = useMemo(() => {
    switch (type) {
      case MISSION_TYPE.TEXT:
        return 'bg-blue-500';
      case MISSION_TYPE.PHOTO:
        return 'bg-orange-500';
      case MISSION_TYPE.GPS:
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  }, [type]);

  return <div className={`w-24 h-24 rounded-md ${color}`} />;
}
