const Modal = () => {
  return (
    <div className="">
      <label for="my-modal-2" className="btn btn-primary modal-button">
        open modal
      </label>
      <input type="checkbox" id="my-modal-2" className="modal-toggle ignoreNavBar fixed inset-0 z-20" />
      <div className="modal  inset-0 !z-[10000]">
        <div className="modal-box">
          <p>
            Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut
            adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea
            quasi eligendi. Saepe velit autem minima.
          </p>
          <div className="modal-action">
            <label for="my-modal-2" className="btn btn-primary">
              Accept
            </label>
            <label for="my-modal-2" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
