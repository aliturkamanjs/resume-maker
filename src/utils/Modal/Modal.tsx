import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { Fragment, ReactNode } from "react";

interface propsType {
  closeModal: () => void;
  isOpen: boolean | undefined;
  title: string;
  children: ReactNode;
  saveChange: () => void;
}

export const Modal = (props: propsType): JSX.Element => {
  const { closeModal, isOpen, title, children, saveChange } = props;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900 backdrop-blur-sm bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-4">
                    <div className="w-full">{children}</div>
                    <div className="flex justify-end">
                      <button
                        className="px-4 py-2 text-xs rounded-md bg-white border text-slate-500 mr-2 hover:bg-slate-50"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveChange}
                        type="submit"
                        className="px-4 py-2 text-xs rounded-md bg-indigo-600 text-slate-50 hover:bg-indigo-700"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
