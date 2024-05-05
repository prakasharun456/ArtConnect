import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="relative bg-white rounded-lg max-w-lg w-full px-4 py-6">
          <div className="absolute top-0 right-0">
            <button onClick={onClose}>&times;</button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
