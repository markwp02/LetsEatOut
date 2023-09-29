function FoodModal({ handleClose, modalRestaurant }) {
    return (
        <div className="modal is-active">
            <div className="modal-background" />
   <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">{modalRestaurant.restaurantName}</p>
      <button className="delete" onClick={handleClose} aria-label="close"></button>
    </header>
    <section className="modal-card-body">
        Hello World
    </section>
  </div>
        </div>
    );
}

export default FoodModal;