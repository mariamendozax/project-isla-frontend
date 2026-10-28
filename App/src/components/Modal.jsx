import { useEffect } from "react";
import { textos, categorias } from "../data/Menu";

function Modal({ lang, setLang, isOpen, onClose, title }) {
  const t = textos[lang];
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
            className="hero__lang-modal"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            className="modal__close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ✕
          </button>

          <h2 className="modal__title">{t.modalMsg}</h2>
        </div>
      </div>
    </div>
  );
}

export default Modal;
