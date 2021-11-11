import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons';

const ITEMS_PER_PAGE = 5;

export default function PageControls(props) {
  const { items, setVisibleItems } = props;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // Update the current items shown when the item offset changes
  useEffect(() => {
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    setVisibleItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / ITEMS_PER_PAGE));
  }, [items, itemOffset, setVisibleItems]);

  // Handle page click by updating the item offset
  const handlePageClick = (event) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      className="flex items-center justify-center p-4 select-none"
      pageLinkClassName="p-2 font-medium hover:text-blue-500"
      activeClassName="border rounded text-blue-500 bg-blue-50"
      breakLabel="..."
      previousLabel={<IconChevronLeft className="hover:text-blue-500" />}
      nextLabel={<IconChevronRight className="hover:text-blue-500" />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
    />
  );
}
