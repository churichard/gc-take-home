import { useState } from 'react';
import Mission from './Mission';
import PageControls from './PageControls';

export default function MissionList(props) {
  const { missions } = props;
  const [visibleMissions, setVisibleMissions] = useState([]);

  return (
    <>
      {visibleMissions &&
        visibleMissions.map((item) => (
          <Mission
            key={item.id}
            type={item.type}
            title={item.title}
            description={item.description}
            points={item.points}
          />
        ))}
      <PageControls items={missions} setVisibleItems={setVisibleMissions} />
    </>
  );
}
