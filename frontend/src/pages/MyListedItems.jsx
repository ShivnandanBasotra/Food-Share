import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Trash, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const MyListedItemsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const data = React.useMemo(
    () => [
      { foodItem: 'Pizza', quantity: '5 slices', date: '2024-09-01', location: 'New York' },
      { foodItem: 'Pasta', quantity: '2 boxes', date: '2024-09-02', location: 'Los Angeles' },
      // Add more items here
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Food Item', accessor: 'foodItem' },
      { Header: 'Quantity', accessor: 'quantity' },
      { Header: 'Pickup Date', accessor: 'date' },
      { Header: 'Location', accessor: 'location' },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => openModal(row.original)}>
              <Eye size={16} />
            </Button>
            <Button variant="outline">
              <Pencil size={16} />
            </Button>
            <Button variant="outline" className="text-red-600">
              <Trash size={16} />
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    pageOptions,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data }, useSortBy, usePagination);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-green-600">My Listed Items</h2>
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-lg shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <table {...getTableProps()} className="min-w-full bg-white">
            <thead className="bg-gray-200">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' ▼'
                            : ' ▲'
                          : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="border-t">
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap">
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
        {/* Pagination Controls */}
        <div className="mt-4 flex justify-end space-x-2">
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </Button>
        </div>
        <div>
          <p>
            Page {pageIndex + 1} of {pageOptions.length}
          </p>
        </div>
      </div>

      {/* Item Details Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <motion.div
                className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  {selectedItem?.foodItem}
                </Dialog.Title>
                <div className="mt-4">
                  <p>Quantity: {selectedItem?.quantity}</p>
                  <p>Date: {selectedItem?.date}</p>
                  <p>Location: {selectedItem?.location}</p>
                  <p>Description: {selectedItem?.description}</p>
                </div>

                <div className="mt-4">
                  <Button variant="primary" onClick={closeModal}>
                    Close
                  </Button>
                </div>
              </motion.div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MyListedItemsPage;
