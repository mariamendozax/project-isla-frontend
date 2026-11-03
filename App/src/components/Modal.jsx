import { useEffect } from "react";
import { textos } from "../data/data";

function Modal({ isOpen, onClose, children, variant = "alert" }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  if (variant === "wide") {
    return (
      <div className="modal__overlay" onClick={onClose}>
        <div
          className="modal__content-div"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal__content">{children}</div>
          <button
            className="modal__close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__box"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          className="modal__close-aviso"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Modal;
