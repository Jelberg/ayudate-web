import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed rounded-lg inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-700 rounded-lg shadow-lg p-6 max-w-3/5 max-h-96 overflow-y-auto">
        <button
          className="absolute border rounded top-0 right-0 m-12 px-5 py-4 text-white hover:text-gray-800"
          onClick={onClose}
        >
          X CERRAR
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
