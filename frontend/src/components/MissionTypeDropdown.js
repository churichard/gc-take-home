import { Menu } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons';
import { MISSION_TYPE, useStore } from '../store/store';

export default function MissionTypeDropdown() {
  const filteredTypes = useStore((state) => state.filteredTypes);
  const addFilteredType = useStore((state) => state.addFilteredType);
  const removeFilteredType = useStore((state) => state.removeFilteredType);

  const onInputChange = (checked, type) => {
    if (checked) {
      addFilteredType(type);
    } else {
      removeFilteredType(type);
    }
  };

  // Each menu item here could be refactored into a component, but I chose not to because of time constraints
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium border rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        Filter by type <IconChevronDown size={18} className="ml-1" />
      </Menu.Button>
      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="p-4">
          <div className="flex items-center space-x-1 text-gray-900">
            <input
              type="checkbox"
              id="text"
              checked={filteredTypes.includes(MISSION_TYPE.TEXT)}
              onChange={(e) =>
                onInputChange(e.target.checked, MISSION_TYPE.TEXT)
              }
            />
            <label htmlFor="text">Text</label>
          </div>
          <div className="flex items-center space-x-1 text-gray-900">
            <input
              type="checkbox"
              id="photo"
              checked={filteredTypes.includes(MISSION_TYPE.PHOTO)}
              onChange={(e) =>
                onInputChange(e.target.checked, MISSION_TYPE.PHOTO)
              }
            />
            <label htmlFor="photo">Photo</label>
          </div>
          <div className="flex items-center space-x-1 text-gray-900">
            <input
              type="checkbox"
              id="gps"
              checked={filteredTypes.includes(MISSION_TYPE.GPS)}
              onChange={(e) =>
                onInputChange(e.target.checked, MISSION_TYPE.GPS)
              }
            />
            <label htmlFor="gps">GPS</label>
          </div>
        </div>
      </Menu.Items>
    </Menu>
  );
}
