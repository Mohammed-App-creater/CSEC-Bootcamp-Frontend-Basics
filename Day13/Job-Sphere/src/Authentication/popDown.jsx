import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const ErrorAlert = ({ message, show }) => {
    const [showAlert, setShowAlert] = useState(show);
    const onClose = () => setShowAlert(false);
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [showAlert, show]);

  return (
    <>
    { showAlert? (  <section
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 w-full max-w-md bg-red-500 text-white text-center px-4 py-2 rounded-lg shadow-lg transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } z-50`}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
      </div>
    </section>
    ) : null}
    </>
  );
};
ErrorAlert.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};
export default ErrorAlert;
