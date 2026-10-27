import { useEffect } from "react";

function Modal({ isOpen, onClose, title }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content-div" onClick={(e) => e.stopPropagation()}>
        <div className="modal__content">
          <button
            className="modal__close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ✕
          </button>

          {title && <h2 className="modal__title">{title}</h2>}
        </div>
      </div>
    </div>
  );
}

export default Modal;
