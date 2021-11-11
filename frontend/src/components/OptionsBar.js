import SortDropdown from './SortDropdown';
import MissionTypeDropdown from './MissionTypeDropdown';

export default function OptionsBar() {
  return (
    <div className="flex items-center p-4 space-x-4">
      <SortDropdown />
      <MissionTypeDropdown />
    </div>
  );
}
