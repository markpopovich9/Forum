import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  children: ReactNode;
  doCloseOnClickOutside?: boolean;
  container?: HTMLElement | null;
  className?: string;
}

const Modal = ({
  isOpen,
  setIsOpen,
  children,
  doCloseOnClickOutside = false,
  container,
  className,
}: ModalProps) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (doCloseOnClickOutside) {
      setIsOpen(false);
    }
  };

  const content = (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={`${styles.modal} ${className ?? ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(content, container ?? document.body);
};

export default Modal;