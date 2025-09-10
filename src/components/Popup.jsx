import { useEffect } from 'react';
import '../css/Popup.css'; 

const Popup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="popup">
        <div className="popup-content">
            <p>{message}</p>
        </div>
      <div className='progress-bar'></div>
    </div>
  );
};

export default Popup;