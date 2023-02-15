import { useEffect } from "react"
import { createPortal } from "react-dom";
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  })
    
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
  };
  
    const handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
         onClose();
        }
     };
    
    return createPortal(
      <Overlay onClick={handleBackdropClick}>
        <ModalWindow>
          {children}
        </ModalWindow>
      </Overlay >,
    modalRoot,
  )
}