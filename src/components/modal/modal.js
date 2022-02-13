import { motion } from "framer-motion";
const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 25,
      stiffness: 100,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ onClose, onSubmit }) => {
 
  return (
    <motion.div
      className="fixed  z-[2] inset-0 "
      aria-labelledby="modal-title"
      role="dialog"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      aria-modal="true"
      onClick={() => onClose()}
    >
      <div className="flex  items-center   justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className={`fixed inset-0  bg-black transition-opacity`}
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          onClick={(e) => e.stopPropagation()}
          className={`inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  w-[90%] `}
        >
          <div>modal</div>
        </div>
      </div>
    </motion.div>
  );
};
export default Modal;
