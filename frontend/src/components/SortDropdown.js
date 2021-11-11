import { useCallback } from 'react';
import { Menu } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons';
import { SORT, useStore } from '../store/store';

export default function SortDropdown() {
  const sort = useStore((state) => state.sort);
  const setSort = useStore((state) => state.setSort);

  const buttonClassName = useCallback(
    (buttonSort, active) =>
      `flex rounded-md items-center w-full px-2 py-2 text-sm ${
        sort === buttonSort ? 'text-blue-500 font-semibold' : 'text-gray-900'
      } ${active ? 'bg-gray-100' : ''}`,
    [sort]
  );

  // Each menu item here could be refactored into a component, but I chose not to because of time constraints
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium border rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        Sort by <IconChevronDown size={18} className="ml-1" />
      </Menu.Button>
      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <button
                className={buttonClassName(SORT.NONE, active)}
                onClick={() => setSort(SORT.NONE)}
              >
                Unsorted
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={buttonClassName(SORT.TITLE_ASC, active)}
                onClick={() => setSort(SORT.TITLE_ASC)}
              >
                By title (ascending)
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
