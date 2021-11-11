import { useCallback, useEffect, useMemo, useState } from 'react';
import MissionList from './components/MissionList';
import OptionsBar from './components/OptionsBar';
import { SORT, useStore } from './store/store';

export default function App() {
  const [missions, setMissions] = useState([]);

  const sort = useStore((state) => state.sort);
  const filteredTypes = useStore((state) => state.filteredTypes);

  // Fetches missions from the backend
  const initMissions = useCallback(async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/missions`
    );
    if (res.ok) {
      const { missions } = await res.json();
      setMissions(missions);
    }
  }, []);

  useEffect(() => {
    initMissions();
  }, [initMissions]);

  // Sorts and filters missions
  // We could also do this on the backend, and depending on how many missions there are, it may be better to do so.
  // If the number of missions is small, then the frontend is better because it is faster and doesn't require extra network requests.
  const sortedAndFilteredMissions = useMemo(() => {
    // Filter missions by type
    const newMissions =
      filteredTypes.length === 0
        ? [...missions]
        : missions.filter((mission) => filteredTypes.includes(mission.type));

    // Sort missions
    switch (sort) {
      case SORT.TITLE_ASC:
        return newMissions.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return newMissions;
    }
  }, [missions, sort, filteredTypes]);

  return (
    <div className="container my-8 rounded shadow">
      <OptionsBar />
      <MissionList missions={sortedAndFilteredMissions} />
    </div>
  );
}
